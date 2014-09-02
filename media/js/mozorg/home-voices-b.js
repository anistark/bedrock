/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

$(function () {
    'use strict';

    function initMasonry() {
        $('.faces-grid').masonry({
            columnWidth: 140,
            gutter: 20,
            itemSelector: 'li'
        });

        $('.promo-grid').masonry({
            columnWidth: 140,
            gutter: 20,
            itemSelector: '.item',
            stamp: '.stamp'
        });

        $('.promo-side-grid').masonry({
            columnWidth: 300,
            gutter: 20,
            itemSelector: '.item'
        });
    }

    initMasonry();

});
