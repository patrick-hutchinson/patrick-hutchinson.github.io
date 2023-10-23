//if (document.querySelector(".selectedProject")) essentially checks if a project is currently selected. Perhaps changing this to a variable would be more clear and readable.

//initialize a variable that will check whether a user is on mobile
let isMobile = "";
//initally set the isMobile variable
if (window.innerWidth < 607) {
    isMobile = true;
} else {
    isMobile = false;
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 607) {
        isMobile = true;
    } else {
        isMobile = false;
    }
});



window.addEventListener("load", function () {
    let pageWrapper = document.querySelector("#pageWrapper");
    let expandButton = document.querySelector(".archiveButton");

    let mediaContainer = document.querySelector("#mediaContainer");
    let projectImage = mediaContainer.querySelector("img");
    let projectVideo = mediaContainer.querySelector("video");
    let videoSource = projectVideo.querySelector("source");
    let selectedProject = document.querySelector(".selectedProject");

    function switchToImage() {
        projectImage.classList.add("visible");
        projectImage.classList.remove("hidden");
        projectVideo.classList.add("hidden");
        projectVideo.classList.remove("visible");
    }

    function switchToVideo() {
        projectImage.classList.remove("visible");
        projectImage.classList.add("hidden");
        projectVideo.classList.add("visible");
        projectVideo.classList.remove("hidden");
    }

    function increaseOpacity() {
        document.querySelectorAll(".list span").forEach(function (listSpan) {
            listSpan.classList.remove("lowerOpacity");
        })
        document.querySelectorAll(".thumbnailImage").forEach(function (listSpan) {
            listSpan.classList.remove("lowerOpacity");
        })
        document.querySelector(".bioText").classList.remove("lowerOpacity");
        document.querySelector(".copyrightNotice").classList.remove("lowerOpacity");
        document.querySelector(".switch").classList.remove("lowerOpacity");
    }



    document.querySelectorAll(".projectTitle").forEach(function (projectTitle, projectTitleIndex, projectTitleArray) {

        function lowerOpacity() {
            document.querySelectorAll(".list span").forEach(function (listSpan) {
                listSpan.classList.add("lowerOpacity");
            })
            document.querySelectorAll(".thumbnailImage").forEach(function (listSpan) {
                listSpan.classList.add("lowerOpacity");
            })
            document.querySelector(".bioText").classList.add("lowerOpacity");
            projectTitle.classList.remove("lowerOpacity");
            document.querySelector(".copyrightNotice").classList.add("lowerOpacity");
            document.querySelector(".switch").classList.add("lowerOpacity");
        }



        //title hovering actions
        projectTitle.addEventListener("mouseenter", function () {
            if (!isMobile && !pageWrapper.classList.contains("dragRight")) {

                let firstProjectMedia = projectTitle.closest(".projectBlock").querySelector(".projectMedia").children[0];

                mediaContainer.classList.add("hoverVisible");

                if (firstProjectMedia.tagName == "IMG") {
                    switchToImage();
                    projectImage.setAttribute("src", firstProjectMedia.getAttribute("src"));
                } else if (firstProjectMedia.tagName == "VIDEO") {
                    switchToVideo();

                    videoSource.setAttribute("src", firstProjectMedia.firstElementChild.getAttribute("src"));
                    projectVideo.load();
                    projectVideo.play();
                }
            }
        })

        projectTitle.addEventListener("mouseleave", function () {
            if (!isMobile) {
                mediaContainer.classList.remove("hoverVisible");
            }
        })
    });



    // // // // // // //
    //automatically update the year of copyright
    document.querySelectorAll(".currentYear").forEach(function (yearTags) {
        yearTags.innerHTML = new Date().getFullYear();
    })


    // // // // // // //
    //name/logo animation
    let easingFactor = 1.8;

    setTimeout(() => {
        const element = document.querySelector('.your-element'); // Replace with your element's selector
        const duration = 2000; // Animation duration in milliseconds
        const startValue = 0; // Initial value of the property
        const endValue = 400; // Final value of the property

        let startTime;
        let direction = 1; // Animation direction: 1 for forward, -1 for backward

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;

            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
            const easedProgress = easeInOutCubic(progress); // Apply ease-in-out easing function

            let animatedValue;

            if (direction === 1) {
                animatedValue = startValue + (endValue - startValue) * easedProgress;
            } else {
                animatedValue = endValue - (endValue - startValue) * easedProgress;
            }

            document.querySelector(":root").style.setProperty("--wghtAxis", animatedValue);

            if (progress >= 1) {
                direction *= -1; // Reverse animation direction
                startTime = null; // Reset start time for the new phase
            }

            requestAnimationFrame(animate);
        }

        // Easing function
        function easeInOutCubic(t) {

            // Faster start
            if (t < 0.5) {
                return Math.pow(2 * t, easingFactor) / 2;
            }

            // Faster finish
            return 1 - Math.pow(2 * (1 - t), easingFactor) / 2;
        }

        requestAnimationFrame(animate);
    }, 1200)

    const element = document.querySelector('.your-element'); // Replace with your element's selector
    const duration = 2000; // Animation duration in milliseconds
    const startValue = 0; // Initial value of the property
    const endValue = 400; // Final value of the property

    let startTime;
    let direction = 1; // Animation direction: 1 for forward, -1 for backward

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
        const easedProgress = easeInOutCubic(progress); // Apply ease-in-out easing function

        let animatedValue;

        if (direction === 1) {
            animatedValue = startValue + (endValue - startValue) * easedProgress;
        } else {
            animatedValue = endValue - (endValue - startValue) * easedProgress;
        }

        document.querySelector(":root").style.setProperty("--cursAxis", animatedValue);

        if (progress >= 1) {
            direction *= -1; // Reverse animation direction
            startTime = null; // Reset start time for the new phase
        }

        requestAnimationFrame(animate);
    }

    // Easing function
    function easeInOutCubic(t) {

        // Faster start
        if (t < 0.5) {
            return Math.pow(2 * t, easingFactor) / 2;
        }

        // Faster finish
        return 1 - Math.pow(2 * (1 - t), easingFactor) / 2;
    }

    requestAnimationFrame(animate);



    // // // // // // //
    //"More Info" Visibility
    document.querySelector(".moreInfo").addEventListener("mouseenter", function () {
        if (!isMobile) {
            document.querySelector(".infoContainer").classList.add("peek");
        }

    })
    document.querySelector(".moreInfo").addEventListener("mouseleave", function () {
        if (!isMobile) {
            document.querySelector(".infoContainer").classList.remove("peek");
        }
    })
    document.querySelector(".moreInfo").addEventListener("click", function () {
        if (!isMobile) {
            document.querySelector(".infoContainer").classList.remove("peek");
        }
        document.querySelector(".infoContainer").classList.toggle("visible");
    })


    // // // // // // //
    //Manually switch Darkmode // Lightmode

    function darkModeDark() {
        document.querySelector(".switch").classList.add("darkmode");
        document.querySelector(":root").style.setProperty("--font-color", "#fff");
        document.querySelector(":root").style.setProperty("--background-color", "#101010");
        document.querySelectorAll(".typeTitle").forEach(function (typeTitles) {
            typeTitles.style.background = "#C6E2ED";
            typeTitles.style.color = "#000";
        })
    }

    function darkModeLight() {
        document.querySelector(".switch").classList.remove("darkmode");
        document.querySelector(":root").style.setProperty("--font-color", "#A1E6D2");
        document.querySelector(":root").style.setProperty("--background-color", "#fff");
        document.querySelectorAll(".typeTitle").forEach(function (typeTitles) {
            typeTitles.style.background = "#003832";
            typeTitles.style.color = "#fff";
        })
    }

    document.querySelector(".switch").addEventListener("click", function () {
        if (!document.querySelector(".switch").classList.contains("darkmode")) {
            darkModeDark();
        } else {
            darkModeLight();
        }
    })

    //Darkmode based on current time
    let currentTime = new Date().toLocaleTimeString().slice(0, 2);
    if (currentTime > 18) {
        darkModeDark();
    } else {
        darkModeLight();
    }



    // // // // // // //
    //Project Expand
    //Toggle Visibility of Additional Info Tags
    function toggleItemVisibility() {
        let toggleItems = document.querySelectorAll(".toggleTag");
        toggleItems.forEach(function (toggleItem) {
            toggleItem.classList.toggle("hidden");
        })
    }

    function toggleProjectVisibility() {
        let toggleProjects = document.querySelectorAll(".projectBlock");
        toggleProjects.forEach(function (toggleProject) {
            if (toggleProject.classList.contains("hidden")) {
                toggleProject.classList.remove("hidden");
                toggleProject.classList.add("wasHidden");
            } else if (toggleProject.classList.contains("wasHidden")) {
                toggleProject.classList.add("hidden");
                toggleProject.classList.remove("wasHidden");
            }
        })
    }

    //Toggle Visibility of Diviver Lines
    function toggleHRVisibility() {
        let hrElements = document.querySelectorAll(".projectBlock hr");
        hrElements.forEach(function (hrElement) {
            hrElement.classList.toggle("invisible");
        })
    }

    if (isMobile) {
        expandButton.innerHTML = "Expand for more";
    }

    function expandToProjects() {
        if (!isMobile) {
            document.querySelector("#pageWrapper").classList.toggle("dragRight");
            document.querySelector(".backButton").classList.remove("hidden");

            if (pageWrapper.classList.contains("dragRight")) {
                expandButton.innerHTML = "< Back to Main"
            } else {
                expandButton.innerHTML = "Expand for more >"
            };
        } else {
            if (expandButton.innerHTML == "Expand for more") {
                expandButton.innerHTML = "Collapse ^"
            } else {
                expandButton.innerHTML = "Expand for more"
            };
        }

        let toggleItems = document.querySelectorAll(".toggleTag");
        toggleItemVisibility();
        toggleHRVisibility();
        toggleProjectVisibility();
    }

    //Expanding Functionality
    document.querySelector(".archiveButton").addEventListener("click", function () {
        expandToProjects()
    })

    //backbutton
    document.querySelector(".backButton").addEventListener("click", function () {

        document.querySelector("#pageWrapper").classList.remove("dragRight");
        document.querySelector(".backButton").classList.add("hidden");
        toggleItemVisibility();
        toggleHRVisibility();
        toggleProjectVisibility();

        if (document.querySelector(".archiveButton").innerText == "Expand for more >") {
            document.querySelector(".archiveButton").innerText = "< Back to Main"
        } else {
            document.querySelector(".archiveButton").innerText = "Expand for more >";
        }

        //Accordeon
        document.querySelectorAll(".projectBlock").forEach(function (projectTitles) {
            projectTitles.classList.toggle("active");
            let accordeonContent = projectTitles.querySelector(".projectMedia");
            accordeonContent.style.maxHeight = null;
        })

        //Opacity
        increaseOpacity();

        //remove the active class from all elements
        document.querySelectorAll(".projectTitle").forEach(function (projectTitle) {
            projectTitle.classList.remove("active");
        })

        //hide backbutton
        document.querySelector(".backButton").classList.add("hidden");

        document.querySelector("body").style.cursor = "default";

        //        if (!document.querySelector(".selectedProject")) {
        //            increaseOpacity();
        //            document.querySelectorAll("a").forEach(function (links) {
        //                links.classList.remove("nonClickable");
        //            })
        //        }
    })



    // // // // // // //
    //Image 3D-Animaition  
    let constrain = 20;
    let mouseOverContainer = document.querySelector("body");
    let ex1Layers = document.querySelectorAll(".thumbnailImage");

    function transforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let calcX = -(y - box.y - (box.height / 2)) / constrain;
        let calcY = (x - box.x - (box.width / 2)) / constrain;

        return "perspective(100px) " +
            "rotateX(" + calcX + "deg) " +
            "rotateY(" + calcY + "deg)";
    }

    function transformElement(el, xyEl) {
        el.style.transform = transforms.apply(null, xyEl);
    }

    mouseOverContainer.onmousemove = function (e) {
        if (!isMobile) {
            let xy = [e.clientX, e.clientY];

            ex1Layers.forEach(function (ex1Layer) {
                let position = xy.concat([ex1Layer]);
                window.requestAnimationFrame(function () {
                    transformElement(ex1Layer, position);
                });
            });
        }
    };



    // // // // // // //
    //Accordeon
    document.querySelectorAll(".projectTitle").forEach(function (projectTitles, projectTitlesIndex, projectTitlesArray) {
        projectTitles.addEventListener("click", function () {

            //hide preview container;
            mediaContainer.classList.remove("hoverVisible");

            //expand to full project view
            if (!pageWrapper.classList.contains("dragRight") && !isMobile) {
                expandToProjects();
            }

            //open the project
            setTimeout(() => {
                if (pageWrapper.classList.contains("dragRight") || isMobile) {
                    this.classList.toggle("active");
                    let accordeonContent = this.parentElement.querySelector(".projectMedia");
                    if (accordeonContent.style.maxHeight) {
                        accordeonContent.style.maxHeight = null;
                    } else {
                        accordeonContent.style.maxHeight = accordeonContent.scrollHeight + "px";
                    }
                }
            }, 400);

            //close other open tabs when a new one is clicked
            projectTitlesArray.forEach(function (projectTitlesAlt) {
                if (projectTitlesAlt !== event.target && projectTitlesAlt.classList.contains("active")) {
                    projectTitlesAlt.classList.toggle("active");
                    let accordeonContent = projectTitlesAlt.parentElement.querySelector(".projectMedia");
                    if (accordeonContent.style.maxHeight) {
                        accordeonContent.style.maxHeight = null;
                    } else {
                        accordeonContent.style.maxHeight = accordeonContent.scrollHeight + "px";
                    }
                }
            })

            //This code block and the one above could be merged
            if (pageWrapper.classList.contains("dragRight")) {

                //lower opacity of all non-clicked projectblocks
                projectTitles.closest(".projectBlock").classList.toggle("selectedProject");
                projectTitleArray.forEach(function (projectTitleAlt) {
                    if (projectTitles !== projectTitleAlt) {
                        projectTitleAlt.closest(".projectBlock").classList.remove("selectedProject");
                    }
                })

                lowerOpacity();

                if (!document.querySelector(".selectedProject")) {
                    increaseOpacity();
                }
            }
        })
    })


    // // // // // // //
    //Image Caroussel Navigation
    document.querySelectorAll(".projectMedia").forEach(function (projectMedia) {
        projectMedia.addEventListener("mousemove", function () {

            if (!isMobile) {

                if (event.clientX > (window.innerWidth / 2)) {
                    document.querySelector("body").style.cursor = "e-resize";
                    window.addEventListener("click", function () {
                        projectMedia.scrollTo({
                            top: 0,
                            left: projectMedia.scrollLeft + (window.innerWidth / 2),
                            behavior: "smooth",
                        });
                    })
                } else {
                    document.querySelector("body").style.cursor = "w-resize";

                    window.addEventListener("click", function () {
                        projectMedia.scrollTo({
                            top: 0,
                            left: projectMedia.scrollLeft - (window.innerWidth / 2),
                            behavior: "smooth",
                        });
                    })
                }
            }
        })
    })









    //end of load function
});
