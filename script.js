(function() {
    $(document).ready(function() {
        $(".skill-wrapper").each(function() {
            var skillTitle = $(this).children(".skill-title");
            
            $(this).on("click", function() {
                if(skillTitle.css("display") === "none") {
                    $(".skill-wrapper").each(function() {
                        $(this).children(".skill-title").css("display", "none");
                    });
                    
                    skillTitle.css("display", "block");
                }
                else {
                    $(this).children(".skill-icon").blur();
                    
                    skillTitle.css("display", "none");
                    skillTitle.removeClass("fadeOutUp");
                }
            });
            
            if($(window).width() >= 1440) {
                $(this).hover(function() {
                    skillTitle.css("display", "block");
                }, function() {
                    skillTitle.css("display", "none");
                    skillTitle.removeClass("fadeOutUp");
                });
            }
        });
    });
})();
