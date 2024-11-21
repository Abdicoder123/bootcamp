
console.log("toggle button feature jquery");

var content = $('#hide-features');

$('#toggle').on('click', function(){
    if ($(content).css('display') === 'none') {
        $(content).css('display', 'block');
        $('#toggle').text('Hide Content');
    } else {
        $(content).css('display', 'none');
        $('#toggle').text('Show Content');
    }
})

$('#load-comments').on('click', function() {
    const categoryId = $('#category-id').data('category');
    const articleId = $('#load-comments').data('article');

    const url = `/categories/${categoryId}/articles/${articleId}/comments`;
    console.log($.getJSON(url));
    $.getJSON(url, function(data){
        console.log(data);
        // Append the new comments to the container #comments
        $('#comments').append()
    })
        // add .fail callback to handle error messaging
    });