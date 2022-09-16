
// Get buttons array
const favBtns = document.querySelectorAll('.favouritesButton')

// Add event listener to each button
for(btn of favBtns) {
    btn.addEventListener('click', e => {
        let coinId = e.target.value
        putTest(coinId)
    })
}

// PUT to create and delete coin id into favourites
const putTest = async (coinId) => {
    const fetchTest = await fetch(`/api/favourites/${coinId}`,
    {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "PUT",
    })
    const testRes = await fetchTest.json()
    console.log(testRes)
}

// Post comments function
async function postComments(userID, coinID) {
    console.log(userID);
    console.log(coinID);
    let post = $('.status-box').val();
    console.log(post);
    await postCommentsAPI(userID, coinID, post);
}

// This section is for comments section where user adds comments and added comments gets recorded on the page.
var main = async function (data) {
    $('.btn.btn-primary.post').click(function () {
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
$(document).ready(main)

