// Get buttons array
const favBtns = document.querySelectorAll('.favouritesButton')

// Add event listener to feach button
for (btn of favBtns) {
    btn.addEventListener('click', e => {
        let coinId = e.target.value
        let element = e.target


        setFavouriteButton(element);
        // putTest(coinId);
    })
}

// This function sets the favourite button to red or default depending on if the values are in the fav list
async function setFavouriteButton(favElement) {
    // For individual element
    if (favElement != undefined) {
        var coinValue = favElement.value
        let isFav = await getFavourites(coinValue);
        if (isFav) {
            favElement.style.color = "";
        } else {
            favElement.style.color = "red";
        }
        putTest(coinValue);

    } else {
        const collection = document.getElementsByClassName("favouritesButton");
        for (var i = 0; i < collection.length; ++i) {
            // do something with items[i], which is a <li> element
            let isFav = await getFavourites(collection[i].value)
            if (isFav) {
                collection[i].style.color = "red";
            } else {
                collection[i].style.color = "";
            }
        }
    }


}

// PUT to create and delete coin id into favourites
const putTest = async (coinId) => {
    const fetchTest = await fetch(`/api/favourites/${coinId}`,
        {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "PUT",
        })
    const testRes = await fetchTest.json()
    return testRes;

}

// PUT to create and delete coin id into favourites
const getFavourites = async (coinId) => {
    let getFavStat = await fetch(`/api/favourites/isfavourite/${coinId}`,
        {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "GET",
        })
    let favRes = await getFavStat.json()
    return favRes
}


// Post comments function
async function postComments(userID, coinID) {
    let post = $('.status-box').val();
    await postCommentsAPI(userID, coinID, post);
}

// This section is for comments section where user adds comments and added comments gets recorded on the page.
var main = async function () {
    $('.btn.btn-primary.post').click(async function () {
        var post = $('.status-box').val();

        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('250');
        $('.btn.btn-primary.post').addClass('disabled');
    });
    $('.status-box').keyup(function () {
        var postLength = $(this).val().length;
        var charactersLeft = 250 - postLength;
        $('.counter').text(charactersLeft);
        if (charactersLeft < 0) {
            $('.btn.btn-primary.post').addClass('disabled');
        } else if (charactersLeft === 250) {
            $('.btn.btn-primary.post').addClass('disabled');
        } else {
            $('.btn.btn-primary.post').removeClass('disabled');
        }
    });
}

// To post the comments made by the user
const postCommentsAPI = (userID, coinID, comment) => {
    return new Promise(async function (resolve, reject) {

        let responseAddComment = await fetch(`/api/comments/${userID}/${coinID}/${comment}`,
            {
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: "POST",
            });
        let responseAddCommentJson = await responseAddComment.json();
        let responseAddCommentStatus = responseAddComment.status;


        if (responseAddCommentStatus === 201 || responseAddCommentStatus === 200 && !(responseAddCommentJson === undefined)) {
            resolve(responseAddCommentJson);
        } else {
            reject(false);
        }
    });
}


$('.btn.btn-primary.post').addClass('disabled');
// $(document).ready(main)
document.addEventListener("DOMContentLoaded", function () {
    main();
    setFavouriteButton();
});
// $(document).ready(setFavouriteButton)

