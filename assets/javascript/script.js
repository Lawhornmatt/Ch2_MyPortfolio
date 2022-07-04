//I want to make the page:
//1) Scroll down to my pic, nav, and proj links upon load after a small delay
//2) Scroll to the appropriate section when clicking the nav links instead of teleporting
// $("article").find("a").click(function(e) {
//     e.preventDefault();
//     var section = $(this).attr("href");
//     $("html, body").animate({
//         scrollTop: $(section).offset().top
//     });
// });