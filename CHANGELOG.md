# Changelog
All notable changes to this project will be documented in this file.

## 5.0.0 (2023-8-1)

- Upgraded the theme to work with Node 18 
- Bump Stencil utils to 6.15.1 and other packages to match Cornerstone v6.12.0
- Updated Webpack config to work with updated packages 

## 4.2.1 (2022-5-17)
- Changed css variables for grid to use 'percentage()'
- Included missing css for sale flags
- Removed schema translation file that had been added from last merge with cornerstone. This feature is not currently supported by Roots
- Added option to customize the bg color of the sale badge on card hover

## 4.2.0 (2022-3-28)
- Fixed alignment of thumbnails on product pages
- Merged changes from Cornerstone v6.3.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/6.2.0...6.3.0

## 4.1.2 (2022-3-2)
- Center aligned newsletter summary text in footer
- Added setting to customize top & bottom border of main navigation

## 4.1.1 (2022-1-28)
- Removed duplicate display of MSRP price
- Updated theme setting "Brand Thumbnail" to control brand logo size on individual brand pages
- Updated "Payment Buttons" theme style settings

## 4.1.0 (2022-1-20)
- Fixed special characters display in description area of compare page
- Modified logo size styles on optimized checkout page
- Added option to theme styles to exclude quantity box in add to cart panel
- Fixed visibility of "Show More" link in mobile filters
- Fixed overlapping "Close to view results" link in mobile filters when no subcategories exist
- Updated footer payment logo for Klarna
- Fixed review popup functionality when clicking on link in "invitation to review products" email
- Fixed "undefined" error in bulk pricing display for non-english storefronts
- Merged changes from Cornerstone v6.2.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/6.1.1...6.2.0

## 4.0.2 (2021-11-17)
- Fixed broken "Show More" link in facets menu
- Made mini cart close on screen re-size to avoid visual placement issues on re-size
- Fixed mobile mini cart placement issues
- Fixed color of mini cart close 'x' button - was previously the same color as the background

## 4.0.1 (2021-10-14)
- Fixed product card hover display of quick view and add to cart buttons

## 4.0.0 (2021-10-6)
- Gave body initial padding top to eliminate CLS issues on page load (desktop & mobile)
- Made mobile quick search results dropdown scrollable
- Merged changes from Cornerstone v6.1.1 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/5.7.0...6.1.1
- Prevented window from zooming when interacting with inputs

## 3.5.3 (2021-9-20)
- Stopped header nav "person" icon from changing color when hovering over account links
- Modified mobile navigation display of account links
- Increased width of product name container inside mobile add to cart modal
- Fixed search query text "# RESULTS FOR { SEARCH_QUERY }" on search results page

## 3.5.2 (2021-8-18)
- Modified footer "Built by" text to "Theme by"
- Fixed social share links for product pages and blog posts

## 3.5.1 (2021-8-6)
- Fixed display of apostrophes in card stock message
- Fixed toggle functionality of custom filters containing special characters
- Added scroll bar to quick search results dropdown

## 3.5.0 (2021-7-8)
- Removed "Shop By Price" sidebar panel when BigCommerce filters are enabled. This panel doesn't work properly when filters are enabled.
- Removed empty "Shopping Cart & Checkout" section from theme editor
- Merged changes from Cornerstone v5.7.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/5.6.0...5.7.0

## 3.4.0 (2021-6-15)
- Merged changes from Cornerstone v5.6.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/5.5.0...5.6.0
- Fixed button align in add to cart pop up


## 3.3.0 (2021-6-14)
- Fixed compare page close (x) button display
- Merged changes from Cornerstone v5.5.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/5.4.0...5.5.0

## 3.2.3 (2021-5-21)
- Fixed position of quick search result images to be contained within bounding border
- Removed theme editor settings for geotrust SSL - this is replaced by the new footer global region for adding in security seals

## 3.2.2 - (2021-5-17)
- Fixed card link from extending past visual border

## 3.2.1 - (2021-5-11)
- Made quick search stock badge smaller
- Adjusted alignment of "Out of Stock" button on product pages
- Fixed position of product images on compare page
- Fixed console bug happening on stores not using the homepage carousel builder

## 3.2.0 - (2021-5-4)
- Fixed pagination display on account orders page
- Adjusted wishlist dropdown display so it's no longer getting cut off
- Adjusted clickable area for hamburger icon
- Merged changes from Cornerstone v5.4.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/5.3.0...5.4.0

## 3.1.7 - (2021-4-26)
- Set carousel to auto scroll

## 3.1.6 - (2021-4-22)
- Fixed issue where carousel slides were getting cut off
- Center aligned social icons in mobile footer
- Fixed spacing between add to cart button and wish list button on responsive product page

## 3.1.5 - (2021-4-8)
- Fixed content width of search results page when filters are disabled / no sidebar present
- Fixed placement of 'x' in mobile search results dropdown
- Removed scroll bar for text logos on desktop

## 3.1.4 - (2021-4-1)
- Added toggle in theme editor for element focus outline

## 3.1.3 - (2021-4-1)
- Moved social icons below ATC when wishlist is disabled

## 3.1.2 - (2021-3-31)
- Left aligned page breadcrumbs
- Fixed underline width in navigation dropdowns
- Adjusted position of cart preview on mobile
- Fixed ATC button on mobile not clickable when wishlist not enabled

## 3.1.1 - (2021-3-26)
- Fixed long page bug when there is a long list of "Product Pick List" options

## 3.1.0 - (2021-3-25)
- Fixed display of apostrophes in brand names on brand pages
- Fixed "News & Information" tab visibility on search results page
- Merged changes from Cornerstone v5.3.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/5.1.0...5.3.0 

## 3.0.7 - (2021-3-15)
- Fixed display issue with mobile logo when size set to display as "Original (as uploaded)"
- Hide Add to Cart button for catalogue only items
- Fixed image display on brands page

## 3.0.6 - (2021-3-10)
- Fixed issue with stacking carousel slides

## 3.0.5 - (2021-3-8)
- version bump

## 3.0.4 - (2021-3-8)
- Fixed aria label on carousel arrows
- Fixed horizontal scroll on home page caused by carousel
- Fixed outline display on logo focus

## 3.0.3 - (2021-3-8)
- Fixed carousel visibility issue

## 3.0.2 - (2021-02-23)
- Fixed duplicate "Show Subcategories" button on mobile category pages when filters are disabled. 

## 3.0.1 - (2021-02-16)
- Updated theme verticals
- Fixed SKU bug where if base product didn't have an assigned SKU then the SKU wouldn't show even after selecting a variant with an assigned SKU. 
- Fixed PDP display in IE 11

## 3.0.0 - (2021-02-5)
- Fixed comparison feature functionality after selecting a product filter.
- Merged changes from Cornerstone v5.1.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.9.0...5.1.0 

## 2.8.8 - (2021-01-31)
- Fixed add to cart button issue where the button was hidden if the default option was out of stock but then wouldn't re-appear if an in stock combination was selected. 

## 2.8.7 - (2021-01-20)
- Removed all instances of "Created with Sketch" text from theme icons.
- Adjusted position of carousel text on tablet size devices.

## 2.8.6 - (2020-12-31)
- Modified position of page builder block at the bottom of category pages to avoid displaying beside pagination.

## 2.8.5 - (2020-12-8)
- Fixed bulk pricing table display to improve visual jump

## 2.8.4 - (2020-11-19)
- Fixed alignment of navigation links

## 2.8.3 - (2020-10-23)
- Fixed required "*" showing on optional product option labels

## 2.8.2 - (2020-10-22)
- Fixed category sidebar logic
- Modified order confirmation page styles
- Added setting to customize header 'hamburger' icon on desktop
- Fixed "Shop By Price" block visibility
- Fixed sticky header functionality when BigCommerce admin bar is present
- Fixed text logo getting cut off on mobile
- Added global region to header for page builder
- Fixed alignment of strikethrough on out of stock options

## 2.8.1 - (2020-09-9)
- Hotfix for carousel button. Previously the button wouldn't show unless a heading or text was also entered - it is now setup to show even if no other text is added in the carousel builder. 

## 2.8.0 - (2020-09-9)
- Merged changes from Cornerstone v4.9.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.7.0...4.9.0 

## 2.7.2 - (2020-09-02)
- Added option to change the background color of the grid blocks

## 2.7.1 - (2020-08-25)
- Fixed empty left column in deepest category level.

## 2.7.0 - (2020-07-14)
- Fixed display of special characters in reviewers names
- Fixed display of filters on mobile search results page
- Merged changes from Cornerstone v4.7.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.6.1...4.7.0

## 2.6.2 - (2020-06-10)
- Formatting adjustment to order confirmation page when using one page checkout (not optimized checkout)

## 2.6.1 - (2020-06-10)
- Removed empty left column when shop by price is enabled and only one product is visible in a category
- Removed schema translation file that had been added from last merge with cornerstone. This feature is not currently supported by Roots

## 2.6.0 - (2020-05-29)
- Added page builder regions to category-nofilters template
- Fixed special character display in search results heading
- Fixed stock display when set on the variant level
- Fixed visibility of price in quick search results when login for pricing is enabled. Previously would show "Login for price" even when a customer was logged in
- Merged changes from Cornerstone v4.6.1 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.5.0...4.6.1

## 2.5.6 - (2020-05-19)
- Fixed placement of page builder region on mobile product page

## 2.5.5 - (2020-05-19)
- Fixed accordion (show/hide) functionality on category filters
- Updated currency dropdown background on mobile to inherit from navigation background setting
- Fixed quick search bug on mobile where the input box would disappear after clicking into it. This was caused by the screen re-size triggered by the mobile keyboard appearing.

## 2.5.4 - (2020-05-08)
- Removed "responsive" option from Payment Buttons "Button size". This option breaks the display of the payment icons and causes them to get cut off.
- Fixed bug on category page where empty left column would show when filters were turned off, and subcategories and shop by price were disabled for the left column. Now the product grid will take up the full width when the left column is empty.
- Fixed alignment of quantity label on mobile product page.
- Fixed display of special characters in logged in customers address display and product options display on cart page.
- Fixed display of "Shop by price" on mobile

## 2.5.3 - (2020-04-29)
- Fixed visibility of price in related products block when login for pricing is enabled. Previously would show "Login for price" even when a customer was logged in. 

## 2.5.2 - (2020-04-27)
- Updated theme editor setting options for # of products per page to max out at 100. This is to reflect the limitations of BigCommerce.
- Removed page builder region from sticky header

## 2.5.1 - (2020-04-09)
- Fixed build errors relating to schema

## 2.5.0 - (2020-04-09)
- Fixed bug on product page in firefox where buy block would wrap below main image if image size was less than 60% wide.
- Fixed left column shop by price block. Previously wasn't possible to enable.
- Merged changes from Cornerstone v4.5.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.4.0...4.5.0

## 2.4.2 - (2020-03-16)
- Fixed bug with theme editor option "# of Product Reviews" where dimensions were shown instead of numbers

## 2.4.1 - (2020-03-11)
- Fixed bug where product card expanded on hover even when no action button or quick view button were enabled.
- Fixed text logo bug where text would wrap onto multiple lines before taking up full width of logo container.
- Fixed brands grid display bug in safari where first row would show 3 and second row would show 4.
- Updated color of "show more" link in sidebar filters to match general site link color.

## 2.4.0 - (2020-02-13)
- Increased width of page content on contact us page so content entered in WISIWYG is the full width of the site.
- Fixed bug where product weight data on PDP was not reflecting variant weights when selected
- Fixed schema markup for description and sku data on the PDP
- Merged changes from Cornerstone v4.4.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.3.1...4.4.0

## 2.3.0 - (2020-01-21)
- Fixed styles for order confirmation page "See Details" modal on mobile. Previously the content wasn't visible when this modal was triggered.
- Font size of home page product block headings are now controlled by the theme editor setting for h2 elements.
- Fixed product page thumbnail bug where tall narrow images displayed taller than their containing box.
- Merged changes from Cornerstone v4.3.1 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.2.1...4.3.1
- Fixed bug with pre-order message displaying as "undefined undefined"

## 2.2.1 - (2019-12-09)
- Removed "Description" heading on product page when no description or videos exist. Previously would always show even when description field was empty.
- Fixed pricing issue where default price wasn't matching the default variant price.
- Removed black background from mobile carousel when no text is added the the slide.
- Scroll to top of option form when action button is clicked. This ensures that any error messages on options are visible.
- Removed height restrictions on carousel slides.

## 2.2.0 - (2019-11-13)
- Merged changes from Cornerstone v4.2.1 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/4.1.0...4.2.1
- Fixed navigation bug where the dropdown would start with a blank column. This would happen if the first subcategory group contained more links than the number set in the theme editor setting for "Number of links per column in dropdowns".
- Fixed bug with product images where main image wouldn't update after selecting an option whose rule changed the main image.
- Show brands in simple list on /brands/ page if no brands have been assigned an image. Previously always showed "image coming soon" even when no brands had an image.

## 2.1.1 - (2019-09-25)
- Hotfix for un-functional add to cart button on mobile product page.

## 2.1.0 - (2019-09-18)
- Fixed social share button links. Previously information parameters weren't being passed properly.
- Reverted to previous lazy load functionality where a spinner is shown while images load instead of a blurry version of the image. 

## 2.0.1 - (2019-09-16)
- Fixed issue where buy block would wrap below product image block (safari specific)
- Added visibility settings for Amazon Pay & Google Pay footer icons
- Added back apple Pay icon to footer - was erroneously removed in last update
- User nav icons now inherit their color from the nav user link setting in the theme editor

## 2.0.0 - (2019-09-11)
- Merged changes from Cornerstone v4.1.0 See version comparison here: https://github.com/bigcommerce/cornerstone/compare/3.2.0...4.1.0
- Fixed issue where buy block would wrap below product image block
- Fixed issue where quantity wouldn't update when manually entered on cart page

## 1.0.5 (2019-09-03)
- Hotfix for product options overlapping product specs on mobile

## 1.0.4 (2019-08-29)
- Hotfix for product page display when using Yotpo reviews. Had been showing Yotpo reviews on same row as product image and buy block causing everything to be squished and unusable. 
- Added theme editor option to control number of recent posts to display on home page. Previously you were unable to remove this section using theme settings.
- Fixed modal display on mobile. Previously the modals would display too low on the screen and the content wouldn't be visible.

## 1.0.3 (2019-08-27)
- Modified default number of blog posts that display per page to 6. This lines up better with the theme structure which displays 3 per row.
- Added store design setting for number of blog posts to display per page so it can be modified by users. 
- Fixed visual bug of card image border caused by last update. 

## 1.0.2 (2019-08-20)
- Adjusted placement of card image border to be attached to image instead of image container
- Fixed social share icon link color on hover. Previously had been set to white, now inherits from general link color and general link hover color. 

## 1.0.1 (2019-08-15)
- Updated support e-mail

## 1.0.0 (2019-08-13)
- First publish ready version of Roots

## 0.1.3 (2019-08-08)
- Updated config.json meta information

## 0.1.2 (2019-07-24)
- Adjusted default logo size
- Fixed 'as uploaded' logo option bug where logo didn't line up with left side of nav

## 0.1.1 (2019-07-9)
- Added theme editor setting for text logo font size on mobile
- Added ellipsis on text logo on mobile to prevent overlap on menu and cart logos
- Fixed logo from getting cut off when "optimized for theme" sizing selected

## 0.1.0 (2019-06-27)
- General testing and refinements
- First official version for review

## 0.0.0
- Initial version of Roots for review
