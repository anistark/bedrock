/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

$(function () {
    'use strict';

    var $promos = $('.promo-grid');
    var $promoSideGrid = $('.promo-side-grid');

    function showFaces(show) {
        if (show) {
            $promos.find('.promo-face, .promo-spacer').show().addClass('item');
            $promoSideGrid.find('.promo-face, .promo-spacer').show().addClass('item');
        } else {
            $promos.find('.promo-face, .promo-spacer').hide().removeClass('item');
            $promoSideGrid.find('.promo-face, .promo-spacer').hide().removeClass('item');
        }
        $promos.masonry();
        $promoSideGrid.masonry();
    }

    function initFacesGrid() {
        if (window.matchMedia) {
            // hide/disable pagers in mobile view
            var queryIsMobile = matchMedia('(max-width: 500px)');

            if (!queryIsMobile.matches) {
                showFaces(true);
            } else {
                showFaces(false);
            }

            queryIsMobile.addListener(function(mq) {
                if (mq.matches) {
                    showFaces(false);
                } else {
                    showFaces(true);
                }
            });
        } else {
            showFaces(true);
        }
    }

    function initMasonry() {
        $('.faces-grid').masonry({
            columnWidth: 140,
            gutter: 20,
            itemSelector: 'li'
        });

        $promos.masonry({
            columnWidth: 140,
            gutter: 20,
            itemSelector: '.item',
            stamp: '.stamp',
            isInitLayout: false
        });

        $promoSideGrid.masonry({
            columnWidth: 140,
            gutter: 20,
            itemSelector: '.item',
            isInitLayout: false
        });
    }

    initMasonry();
    initFacesGrid();

});
