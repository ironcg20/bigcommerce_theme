import $ from 'jquery';
import hoverintent from 'hoverintent';

export default function loaded() {
    function windowWidth() {
        let winWidth = window.innerWidth;
        if (Number.isNaN(winWidth)) winWidth = document.body.clientWidth;

        return winWidth;
    }

    let resizeTimer;

    // navigation functionality
    $('.expandLink').on('click', function toggleActive() {
        $(this).parent().toggleClass('active');
    });

    function touchExpand() {
        $('.navPages-mainNav .navPages-action').unbind('click');
        $('.navPages-mainNav .navPages-action-moreIcon').unbind('click');

        if (windowWidth() > 800) {
            $('#menu .link-expanded').removeClass('link-expanded');
            $('#menu .is-open').removeClass('is-open');
        }

        if (windowWidth() <= 800) {
            $('.navPages-mainNav .navPages-item > a > .navPages-action-moreIcon').on('click', function mobileExpand(event) {
                event.preventDefault();
                $(this).parents('li:first').toggleClass('link-expanded');
            });

            $('.navPage-subMenu-item .navPages-action-moreIcon').on('click', function expandGroup() {
                const children = $(this).parent().nextUntil($('.navPage-subMenu-item'), 'li');
                $(this).parent().toggleClass('is-open');
                children.toggleClass('is-open');
            });
        }
    }

    function mobileNavPadding() {
        if (windowWidth() <= 800) {
            const logoHeight = $('.header-logo').outerHeight();
            $('.mobileMenu-toggle').css('height', `${logoHeight}px`);
            $('.navUser-item--cart').css('height', `${logoHeight}px`);
        } else {
            $('.navUser-item--cart').css('height', 'auto');
            $('.navPages-container').css('padding-top', '0');
        }
    }

    // header compress on scroll
    function calcHeaderHeightMobile() {
        const headerNoNavHeight = $('.header-logo--wrap').outerHeight(true);
        const searchHeight = $('.quickSearchWrap').outerHeight(true);
        const mobileHeaderHeight = headerNoNavHeight + searchHeight;
        const pageOffset = $(window).scrollTop();

        if (pageOffset > mobileHeaderHeight) {
            if (!$('.quickSearchWrap .form-input').is(':focus')){
                if (!$('.header').hasClass('slim')) {
                    $('.header').addClass('slim');
                }
                $('.header').css('height', `${mobileHeaderHeight - searchHeight}px`);
                $('body').css('padding-top', `${mobileHeaderHeight - searchHeight}px`);
                $('.navUser-item--mobile-search').css('top', '0');
            }
        }

        if (pageOffset === 0) {
            if ($('.header').hasClass('slim')) {
                $('.header').removeClass('slim');
            }
            $('.header').css('height', `${mobileHeaderHeight}px`);
            $('body').css('padding-top', `${mobileHeaderHeight}px`);
            $('.navUser-item--mobile-search').css('top', `-${headerNoNavHeight}px`);
        }
    }

    function toggleHeaderHeightDesktop() {
        const headerNoNavHeight = $('.header-logo--wrap').outerHeight(true);
        const headerHeight = $('.header').outerHeight();
        const navHeight = $('.navPages-container').outerHeight();
        const navToggleWidth = 44;
        const logoWidth = $('.logo-wrap').outerWidth(true);

        if (!$('.header').hasClass('slim')) {
            $('.header').css('height', `${headerNoNavHeight + navHeight}px`);
            $('body').css('padding-top', `${headerNoNavHeight + navHeight}px`);
            $('.logo-and-toggle').css('width', `${logoWidth}`);
        }

        function compressHeaderDesktop() {
            $('.header').addClass('slim');
            $('.navPages-container').css('top', `-${navHeight}px`);
            $('.header').css('height', `${headerNoNavHeight}px`);
            $('.desktopMenu-toggle').css('left', '0');
            $('.desktopMenu-toggle').css('width', `${navToggleWidth}px`);
            $('.logo-and-toggle').css('width', `${logoWidth + navToggleWidth}`);
            $('body').css('padding-top', `${headerNoNavHeight}px`);
        }

        function expandHeaderDesktop() {
            $('.header').removeClass('slim');
            $('.navPages-container').css('top', '0');
            $('.header').css('height', `${headerNoNavHeight + navHeight}px`);
            $('.desktopMenu-toggle').css('left', '-44px');
            $('.desktopMenu-toggle').css('width', '0');
            $('.logo-and-toggle').css('width', `${logoWidth}`);
            $('body').css('padding-top', `${headerNoNavHeight + navHeight}px`);
        }

        $('.desktopMenu-toggle a').unbind('click');

        $('.desktopMenu-toggle a').bind('click', () => {
            if ($('.header').hasClass('slim')) {
                expandHeaderDesktop();
            }
        });

        $(window).unbind('scroll');
        $(window).scroll(() => {
            const pageOffset = $(window).scrollTop();
            if (pageOffset > headerHeight && !$('.header').hasClass('slim')) {
                compressHeaderDesktop();
            }

            if (pageOffset === 0 && $('.header').hasClass('slim')) {
                expandHeaderDesktop();
            }
        });
    }


    function toggleHeaderHeightMobile() {
        const headerNoNavHeight = $('.header-logo--wrap').outerHeight(true);
        const searchHeight = $('.quickSearchWrap').outerHeight(true);
        const mobileHeaderHeight = headerNoNavHeight + searchHeight;

        calcHeaderHeightMobile();

        $('.navUser-item--mobile-search').unbind('click');
        $('.navUser-item--mobile-search').bind('click', () => {
            if ($('.header').hasClass('slim')) {
                $('.header').removeClass('slim');
                $('.header').css('height', `${mobileHeaderHeight}px`);
                $('body').css('padding-top', `${mobileHeaderHeight}px`);
                $('.navUser-item--mobile-search').css('top', `-${headerNoNavHeight}px`);
            } else {
                $('.header').addClass('slim');
                $('.header').css('height', `${mobileHeaderHeight - searchHeight}px`);
                $('body').css('padding-top', `${mobileHeaderHeight - searchHeight}px`);
            }
        });

        $(window).unbind('scroll');
        $(window).scroll(() => {
            toggleHeaderHeightMobile();
        });
    }

    function headerCompress() {
        $(window).unbind('scroll');
        $('.navUser-item--mobile-search').unbind('click');

        if (windowWidth() > 800) {
            toggleHeaderHeightDesktop();
        } else if (windowWidth() <= 800) {
            toggleHeaderHeightMobile();
        }
    }

    $('.mobile-closeNav').on('click', () => {
        $('header.header > .mobileMenu-toggle').trigger('click');
    });

    // split nav into columns
    const numPerColumn = window.theme_settings.linksPerCol;
    const menuColumns = $('.navPages .column-menu');

    menuColumns.each(function splitColumns() {
        const $colmenu = $(this);
        const $lis = $colmenu.find('li');

        let colMenuHtml = '<ul>';
        let colMenuCount = 0;

        let colGroup = '';
        let colGroupCount = 0;

        $lis.each(function buildColumn() {
            const $li = $(this);
            const $liClass = $li.attr('class');

            if ($liClass === 'navPage-subMenu-item') {
                // test if there is room for the group in the current column
                if (colMenuCount + colGroupCount > numPerColumn && colMenuHtml !== '<ul>') {
                    // if the group doesn't fit, start a new column
                    colMenuHtml += '</ul><ul>';
                    colMenuCount = 0;
                }

                // add group to menu
                colMenuHtml += colGroup; // add group html to menu
                colMenuCount += colGroupCount; // link count for the current column

                // start new group
                colGroup = '';
                colGroupCount = 0;
            }

            // add to group
            colGroup += `<li class="${$liClass}">${$li.html()}</li>`;
            colGroupCount ++;
        });

        // add last group to menu
        if (colGroupCount > 0 && (colGroupCount + colMenuCount <= numPerColumn)) {
            colMenuHtml += `${colGroup}</ul>`;
        } else if (colGroupCount > 0 && (colGroupCount + colMenuCount > numPerColumn)) {
            colMenuHtml += `</ul><ul>${colGroup}</ul>`;
        }

        $colmenu.html(colMenuHtml);
    });

    // set width of dropdowns
    function prepareMenu() {
        if (windowWidth() > 800) {
            const dropdownPadding = parseInt($('.column-menu:first').css('padding-left'), 10) * 2;
            const navWidth = $('.navPages').width();
            const colWidth = Math.floor((navWidth - dropdownPadding) * 0.2);
            menuColumns.each(function countCols() {
                const cols = $(this).children('ul').length;
                const dropdownWidth = (colWidth * cols + dropdownPadding <= navWidth ? colWidth * cols + dropdownPadding : navWidth);
                $(this).children('ul').css('flex', `0 0 ${colWidth}px`);
                $(this).css('width', `${dropdownWidth}px`);

                const navOffset = $('.navPages').offset().left;
                const parentOffset = $(this).parent().offset().left - navOffset;
                const spaceAvailable = navWidth - parentOffset;

                if (dropdownWidth > spaceAvailable) {
                    const rightBound = dropdownWidth - spaceAvailable;
                    $(this).css('left', `-${rightBound}px`);
                }
            });
        } else {
            menuColumns.each(function resetWidths() {
                $(this).children('ul').css('flex', '1 1 auto');
                $(this).css('width', 'auto');
            });
        }
    }

    touchExpand();
    mobileNavPadding();
    headerCompress();

    // hoverintent
    const opts = {
        interval: 100,
    };

    const el = $('.navPages-mega .navPages-item');

    for (let i = 0; i < el.length; i++) {
        hoverintent(el[i],
        function hoverIntentOver() {
            $(this).addClass('hover');
        }, function hoverIntentOut() {
            $(this).removeClass('hover');
        }).options(opts);
    }

    prepareMenu();

    $(window).on('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            touchExpand();
            mobileNavPadding();
            prepareMenu();
            headerCompress();
            closeMiniCart();
        }, 500);
    });

    window.addEventListener('orientationchange', () => {
        touchExpand();
        prepareMenu();
        headerCompress();
    }, false);

    // hide quick search results when clicked outside of quick search
    $(window).on('click', () => {
        $('.quickSearchWrap .quickSearchResults').hide();
    });

    $('.quickSearchWrap').on('click', '.modal-close', () => {
        $('.quickSearchWrap .quickSearchResults').hide();
    });

    $('.quickSearchWrap').on('click', (event) => {
        event.stopPropagation();
    });

    $('.quickSearchResults').on('click', '.quickSearchAll', () => {
        $('#quickSearch form').submit();
    });

    // show quick search results when focused in search input
    $('.quickSearchWrap input').on('focusin', () => {
        $('.quickSearchWrap .quickSearchResults').show();
    });

    // compare functionality
    $('.compare-input').on('change', function compareToggle() {
        checkCompare($(this));
    });
    
    if ($('.page-sidebar').length > 0){
        // re-bind compare onchange when filters update
        const config = { attributes: true, childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            // Use traditional 'for loops' for IE 11
            $('.compare-input').on('change', function compareToggle() {
                checkCompare($(this));
            });
        };
        
        const observer = new MutationObserver(callback);
        observer.observe($('.page-sidebar').get(0), config);
    }

    $(document).ajaxComplete(() => {
        $('.compare-input').on('change', function compareToggle() {
            checkCompare($(this));
        });
    });
    
    function checkCompare($this) {
        const isSelected = $this.is(':checked');
        const compareLabel = $this.parent();
        
        if (isSelected) {
            compareLabel.find('span').show();
            compareLabel.next().css('visibility', 'visible');
            compareLabel.next().show();
        } else {
            compareLabel.find('span').hide();
            compareLabel.next().css('visibility', 'hidden');
            compareLabel.next().hide();
        }
    }

    // review anchor link
    $('.productView-reviewLink a').on('click', (event) => {
        event.preventDefault();

        const reviewsOffset = $('#reviews-accordion').offset() ? $('#reviews-accordion').offset().top : 0;
        const headerHeight = $('.header-logo--wrap').outerHeight(true);
        $(window).scrollTop(reviewsOffset - headerHeight);
    });

    // footer collapse
    $('.footer-info-dropdown .footer-info-heading').on('click', function toggleFooterBlocks() {
        $(this).parent().toggleClass('is-open');
    });
}

function closeMiniCart() {
    if ($('.navUser-item--cart .is-open').length > 0 ){
        $('.navUser-item--cart a').trigger('click');
    }
}
