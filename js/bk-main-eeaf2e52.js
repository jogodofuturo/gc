import {
    r as _0x306c5,
    j as _0x36f55c,
    S as _0x2bc39d,
    a as _0x15081b,
    T as _0x13794b,
    b as _0x5d1381,
    R as _0x776516,
    c as _0x11ccb6,
    d as _0x2a321c,
    E as _0x1db6c0,
    u as _0x392038,
    e as _0x10e8e5,
    f as _0x5c8c70,
    g as _0x81f057,
    h as _0x18571c,
    i as _0x10be19,
    k as _0x3f5a02,
    l as _0xa7a67,
    I as _0x54bf91,
    m as _0x18dd3d,
    F as _0x18e11a,
    n as _0x41e3b7,
    o as _0x2492be
} from './bk-index-c2944e51.js';
const textAlignToJustifyContent = {
    'left': 'flex-start',
    'right': 'flex-end',
    'center': 'center',
    'start': 'flex-start',
    'end': 'flex-end'
};
const useFlexboxJustifyContent = _0x1618c6 => {
    const [_0x1b66ee, _0x709ee9] = _0x306c5['useState']('flex-start');
    _0x306c5['useEffect'](() => {
        if (_0x1618c6['current']) {
            const _0x9f63a0 = window['getComputedStyle'](_0x1618c6['current']);
            const _0x4c210a = _0x9f63a0['textAlign'];
            _0x709ee9(textAlignToJustifyContent[_0x4c210a] || 'flex-start');
        }
    }, [_0x1618c6]);
    return _0x1b66ee;
};
function DefaultCollectionStarSection({
    reviewAmount: _0x45ace1,
    averageRating: _0x1a2be1
}) {
    const _0x5b1b08 = _0x306c5['useRef'](null);
    const _0x58e6c4 = useFlexboxJustifyContent(_0x5b1b08);
    return _0x36f55c['jsx']('div', {
        'ref': _0x5b1b08,
        'className': 'tw-text-[inherit]\x20tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md',
        'style': { 'justifyContent': _0x58e6c4 },
        'children': _0x36f55c['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x36f55c['jsx'](_0x2bc39d, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20mb-[1px]',
                    'averageRating': _0x1a2be1
                }),
                _0x36f55c['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]\x20tw-leading-[normal]',
                    'children': [
                        '(',
                        _0x45ace1,
                        ')'
                    ]
                })
            ]
        })
    });
}
function PianoCollectionStarSection({
    reviewAmount: _0x31fe52,
    averageRating: _0x30cd96
}) {
    const _0x65ecea = _0x306c5['useRef'](null);
    const _0xf3bedf = useFlexboxJustifyContent(_0x65ecea);
    return _0x36f55c['jsx']('div', {
        'className': 'tw-text-[inherit]\x20tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'style': { 'justifyContent': _0xf3bedf },
        'children': _0x36f55c['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x36f55c['jsx'](_0x15081b, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20tw-mb-[1px]',
                    'averageRating': _0x30cd96
                }),
                _0x36f55c['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]',
                    'children': [
                        '(',
                        _0x31fe52,
                        ')'
                    ]
                })
            ]
        })
    });
}
function collectionStarSectionFactory({
    theme: _0xe49edb,
    componentProps: _0x57f72b
}) {
    const {
        reviewAmount: _0x45398f,
        averageRating: _0x86da6b
    } = _0x57f72b;
    const _0x176329 = {
        'default': _0x36f55c['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x45398f,
            'averageRating': _0x86da6b
        }),
        'sol': _0x36f55c['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x45398f,
            'averageRating': _0x86da6b
        }),
        'classic': _0x36f55c['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x45398f,
            'averageRating': _0x86da6b
        }),
        'wide': _0x36f55c['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x45398f,
            'averageRating': _0x86da6b
        }),
        'piano': _0x36f55c['jsx'](PianoCollectionStarSection, {
            'reviewAmount': _0x45398f,
            'averageRating': _0x86da6b
        })
    };
    return _0x176329[_0xe49edb] ?? _0x176329['default'];
}
function CollectionStarSection({
    theme: _0x33201c,
    reviewAmount: _0x58a387,
    averageRating: _0x460142
}) {
    const _0x486482 = collectionStarSectionFactory({
        'theme': _0x33201c,
        'componentProps': {
            'reviewAmount': _0x58a387,
            'averageRating': _0x460142
        }
    });
    return _0x36f55c['jsx']('div', {
        'className': 'tw-my-[0.75rem]',
        'children': _0x486482
    });
}
const getStoreProducts = async _0x153793 => {
    const _0x3be361 = 0xfa;
    const _0x2498af = 'https://' + _0x153793 + '/products.json?limit=' + _0x3be361;
    const _0xbdab76 = 0x5;
    let _0xe7a736 = 0x3;
    let _0x36e0dc = [];
    let _0x371854 = ![];
    for (let _0x8479ee = 0x0; _0x8479ee < _0xe7a736; _0x8479ee++) {
        await Promise['all'](new Array(_0xbdab76)['fill'](0x0)['map'](async (_0x29ae72, _0x250234) => {
            const _0x536384 = _0xbdab76 * _0x8479ee + _0x250234 + 0x1;
            const _0x23a830 = _0x2498af + '&page=' + _0x536384;
            const _0x494695 = await _0x5d1381['get'](_0x23a830);
            if (_0x494695['status'] !== 0xc8) {
                console['error']('Failed\x20to\x20fetch\x20products\x20from\x20' + _0x23a830);
                return;
            }
            const _0x577858 = _0x494695['data']['products'];
            _0x36e0dc = _0x36e0dc['concat'](_0x577858);
            if (_0x577858['length'] < _0x3be361) {
                _0x371854 = !![];
            }
        }));
        if (_0x371854) {
            break;
        }
    }
    return _0x36e0dc;
};
const insertProductStatistics = (_0x2b0dd7, _0x458faa, _0x3c7424, _0x481a2, _0x27a8a2) => {
    const {
        averageRating: _0x1620fe,
        reviewAmount: _0x4c1e8c
    } = _0x2b0dd7;
    if (_0x458faa['querySelector']('.collection-star-section[data-product-id=\x22' + _0x481a2 + '\x22]')) {
        return;
    }
    if (_0x27a8a2 && !_0x4c1e8c)
        return;
    const _0x28d7d7 = document['createElement']('div');
    _0x28d7d7['classList']['add']('collection-star-section', 'bk-reviews', _0x3c7424);
    _0x28d7d7['setAttribute']('data-product-id', _0x481a2);
    _0x28d7d7['style']['textAlign'] = 'inherit';
    _0x458faa['style']['margin'] = '0';
    const _0x182933 = _0x458faa['parentElement'];
    if (!_0x182933)
        return;
    const _0x2b5ff4 = _0x458faa['nextElementSibling'];
    if (_0x2b5ff4) {
        _0x2b5ff4['style']['setProperty']('margin-top', '0');
        _0x182933['insertBefore'](_0x28d7d7, _0x2b5ff4);
    } else {
        _0x182933['appendChild'](_0x28d7d7);
    }
    _0x776516['render'](_0x36f55c['jsx'](CollectionStarSection, {
        'theme': _0x3c7424,
        'averageRating': _0x1620fe,
        'reviewAmount': _0x4c1e8c
    }), _0x28d7d7);
};
const getStoreProductsMap = async (_0x67374c, _0x10f0a4) => {
    const _0x2a9230 = new Map();
    _0x67374c['forEach'](_0xb28383 => {
        _0x2a9230['set'](_0xb28383['handle'], _0xb28383['id']);
    });
    return _0x2a9230;
};
const insertProductsStatistics = async (_0x1b37a0, _0x5935bc, _0x11aaae, _0x1dcdaa, _0x22f836) => {
    const _0x5c5d18 = new Map();
    _0x1b37a0['forEach'](_0x3f9455 => {
        _0x5c5d18['set'](_0x3f9455['productId'], _0x3f9455);
    });
    await Promise['all'](_0x5935bc['map'](async _0x494764 => {
        var _0x994d59, _0x2c4751, _0x4d1403;
        const _0x100c39 = decodeURIComponent(_0x494764['getAttribute']('href') ?? '');
        const _0x361231 = (_0x2c4751 = (_0x994d59 = _0x100c39['split']('/products/')) == null ? void 0x0 : _0x994d59[0x1]) == null ? void 0x0 : _0x2c4751['split']('?')[0x0];
        if (!_0x361231)
            return;
        const _0x4a3301 = _0x11aaae['get'](_0x361231);
        const _0x369e56 = _0x4a3301 ? _0x5c5d18['get'](String(_0x4a3301)) : null;
        const _0x21bfab = (_0x4d1403 = _0x494764['parentElement']) == null ? void 0x0 : _0x4d1403['querySelector']('.collection-star-section[data-product-id=\x22' + _0x4a3301 + '\x22]');
        if (_0x21bfab)
            return;
        if (_0x369e56) {
            insertProductStatistics(_0x369e56, _0x494764, _0x1dcdaa, String(_0x4a3301), _0x22f836);
            return await Promise['resolve']();
        }
    }));
    fixSliderOverflow();
};
const getProductCards = _0x1ad003 => {
    let _0x1a4a44 = [];
    const _0x2693f1 = '.shopify-section[id*=\x22recently-viewed-products\x22]';
    const _0x4c3d7f = '.shopify-section[id*=\x22recommendations\x22]';
    const _0x1e046b = '.shopify-section[id*=\x22promotions\x22]';
    const _0x470c0b = [
        _0x2693f1,
        _0x4c3d7f,
        _0x1e046b
    ];
    const _0x301f56 = [
        'a[href*=\x22/products/\x22][class*=\x22title\x22]',
        '[class*=\x22title\x22]\x20a[href*=\x22/products/\x22]',
        'a[href*=\x22/products/\x22][id*=\x22CardLink\x22]',
        'a[href*=\x22/products/\x22][class*=\x22product-link\x22]',
        'a[href*=\x22/products/\x22][class*=\x22link\x22]'
    ];
    let _0x30f3f9 = _0x301f56;
    if (_0x1ad003) {
        let _0x4123ed;
        for (const _0x5c6a5d of _0x301f56) {
            const _0x41f7c1 = document['querySelector'](_0x5c6a5d);
            if (_0x41f7c1) {
                _0x4123ed = _0x5c6a5d;
                break;
            }
        }
        if (!_0x4123ed)
            return [];
        _0x30f3f9 = _0x470c0b['map'](_0x64c0e8 => _0x64c0e8 + '\x20' + _0x4123ed);
    }
    for (const _0x27160b of _0x30f3f9) {
        _0x1a4a44 = document['querySelectorAll'](_0x27160b);
        if (_0x1a4a44['length']) {
            break;
        }
    }
    return Array['from'](_0x1a4a44)['filter'](_0x279aef => _0x279aef instanceof HTMLElement);
};
const getProductHandles = _0x334c6d => {
    const _0x497d21 = new Set();
    _0x334c6d['forEach'](_0x569c36 => {
        var _0x3acc99, _0x5da522;
        const _0x479461 = decodeURIComponent(_0x569c36['getAttribute']('href') ?? '');
        const _0xe8a017 = (_0x5da522 = (_0x3acc99 = _0x479461['split']('/products/')) == null ? void 0x0 : _0x3acc99[0x1]) == null ? void 0x0 : _0x5da522['split']('?')[0x0];
        if (!_0xe8a017)
            return;
        _0x497d21['add'](_0xe8a017);
    });
    return _0x497d21;
};
const getFilteredProducts = (_0x4a6190, _0x5e7011) => {
    const _0x3e2917 = [];
    for (const _0x33e7ab of _0x5e7011) {
        if (_0x4a6190['has'](_0x33e7ab['handle'])) {
            _0x3e2917['push'](_0x33e7ab);
        }
    }
    return _0x3e2917;
};
const getProductIds = _0x46de48 => {
    return _0x46de48['map'](_0x15ce0b => _0x15ce0b['id']);
};
const getProductsStatistics = (_0x1263e0, _0x45e981) => {
    const _0x52e80f = new _0x11ccb6(_0x1263e0[0x0], _0x45e981, _0x2a321c);
    return _0x52e80f['getCollectionStatistics'](_0x1263e0);
};
const fixSliderOverflow = () => {
    const _0x3d0ec7 = [];
    const _0x5d6684 = [
        '.flickity-viewport:has(.collection-star-section)',
        '.product-list:has(.collection-star-section)'
    ];
    for (const _0x4e2cb1 of _0x5d6684) {
        const _0x4e2eb2 = document['querySelectorAll'](_0x4e2cb1);
        _0x3d0ec7['push'](..._0x4e2eb2);
    }
    if (!_0x3d0ec7['length'])
        return;
    _0x3d0ec7['forEach'](_0x1a77a9 => {
        const _0x3e5738 = _0x1a77a9['querySelector']('.flickity-slider\x20>\x20div');
        if (!_0x3e5738)
            return;
        const _0x441db0 = _0x3e5738['offsetHeight'];
        const _0xb22c83 = _0x1a77a9['offsetHeight'];
        if (_0x441db0 > _0xb22c83) {
            _0x1a77a9['style']['height'] = _0x441db0 + 'px';
        }
    });
};
const getStatisticsAndMap = async (_0x586a13, _0x49f92b) => {
    const _0x7b8768 = getProductHandles(_0x586a13);
    const _0x15cf86 = await getStoreProducts(_0x49f92b);
    const _0x4c68e5 = getFilteredProducts(_0x7b8768, _0x15cf86);
    const _0x3c0b30 = getProductIds(_0x4c68e5);
    const _0x238045 = await getStoreProductsMap(_0x4c68e5);
    const _0x1f80bb = await getProductsStatistics(_0x3c0b30, _0x49f92b);
    return {
        'statistics': _0x1f80bb,
        'productMap': _0x238045
    };
};
function useCollectionStarSection(_0x212898, _0x2ab462, _0x5a8de7 = ![], _0x4020f5 = !![]) {
    const [_0x31efea, _0xbf7220] = _0x306c5['useState']();
    const [_0x5be365, _0x545ab7] = _0x306c5['useState']();
    const [_0x114740, _0x3e8bb5] = _0x306c5['useState'](![]);
    const {theme: _0x544c5f} = _0x306c5['useContext'](_0x13794b);
    const _0x1b80ee = getProductCards(_0x212898);
    _0x306c5['useEffect'](() => {
        if (!_0x4020f5 || !_0x1b80ee['length'] || (_0x31efea == null ? void 0x0 : _0x31efea['length']))
            return;
        getStatisticsAndMap(_0x1b80ee, _0x2ab462)['then'](_0x21375b => {
            const {
                statistics: _0xaec7,
                productMap: _0x29e873
            } = _0x21375b;
            _0xbf7220(_0xaec7);
            _0x545ab7(_0x29e873);
        });
    }, [
        _0x1b80ee,
        _0x4020f5
    ]);
    _0x306c5['useEffect'](() => {
        if (_0x4020f5 && _0x544c5f && _0x31efea && _0x5be365 && !_0x114740) {
            insertProductsStatistics(_0x31efea, _0x1b80ee, _0x5be365, _0x544c5f, _0x5a8de7);
            _0x3e8bb5(!![]);
        }
    }, [
        _0x544c5f,
        _0x31efea,
        _0x5be365,
        _0x4020f5
    ]);
    return;
}
const findFirstElementInDOM = _0x8f943e => {
    return _0x8f943e['filter'](_0x1ad35a => _0x1ad35a !== null)['sort']((_0x42d473, _0x313d53) => {
        if (!_0x42d473 || !_0x313d53)
            return 0x0;
        return _0x42d473['compareDocumentPosition'](_0x313d53) & Node['DOCUMENT_POSITION_FOLLOWING'] ? -0x1 : 0x1;
    })[0x0];
};
const insertReviewSection = _0x529d67 => {
    var _0x1f58ab, _0x257ab6;
    const _0x373475 = document['getElementById']('bk-review-section');
    if (_0x373475) {
        return;
    }
    let _0x54c0c6;
    const _0x4db40a = document['querySelectorAll']('.shopify-section[id*=\x22template\x22]');
    for (const _0x4fe180 of _0x4db40a) {
        if (_0x4fe180['querySelector']('h1') || _0x4fe180['querySelector']('h2')) {
            _0x54c0c6 = _0x4fe180;
            break;
        }
    }
    const _0x59ec86 = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x4dc921 = _0x54c0c6 ? _0x54c0c6['parentNode'] : _0x59ec86;
    const _0x5c18cc = document['createElement']('div');
    _0x5c18cc['classList']['add']('bk-reviews', _0x529d67);
    _0x5c18cc['style']['width'] = '100%';
    _0x5c18cc['style']['height'] = 'fit-content';
    const _0x2bee2c = document['querySelector']('.container--flush');
    const _0x1300c1 = document['querySelector']('.shopify-section[id*=\x22recently-viewed-products\x22]');
    const _0x49c7e2 = document['querySelector']('.shopify-section[id*=\x22recommendations\x22]');
    const _0x2985f4 = document['querySelector']('.shopify-section[id*=\x22promotions\x22]');
    const _0xf61a0c = document['querySelector']('.shopify-section[id*=\x22product-content\x22]');
    const _0x164c01 = document['querySelector']('.shopify-section[id*=\x22information-tabs\x22]');
    const _0x33e620 = [
        _0x1300c1,
        _0x49c7e2,
        _0x2985f4
    ];
    const _0x10cbe3 = findFirstElementInDOM(_0x33e620);
    const _0x5de4d0 = _0x10cbe3 == null ? void 0x0 : _0x10cbe3['parentNode'];
    if (_0x10cbe3 && _0x5de4d0) {
        console['log']('insertBeforeSection', _0x10cbe3);
        _0x5de4d0['insertBefore'](_0x5c18cc, _0x10cbe3);
    } else if (_0xf61a0c && _0xf61a0c['nextElementSibling']) {
        console['log']('productSection', _0xf61a0c);
        (_0x1f58ab = _0xf61a0c['parentNode']) == null ? void 0x0 : _0x1f58ab['insertBefore'](_0x5c18cc, _0xf61a0c['nextElementSibling']);
    } else if (_0x164c01 && _0x164c01['nextElementSibling']) {
        console['log']('informationTabsSection', _0x164c01);
        (_0x257ab6 = _0x164c01['parentNode']) == null ? void 0x0 : _0x257ab6['insertBefore'](_0x5c18cc, _0x164c01['nextElementSibling']);
    } else if (_0x2bee2c && _0x2bee2c['parentNode'] && _0x2bee2c['nextElementSibling']) {
        console['log']('containerFlush', _0x2bee2c);
        _0x2bee2c['parentNode']['insertBefore'](_0x5c18cc, _0x2bee2c['nextElementSibling']);
    } else if (_0x54c0c6) {
        if (_0x54c0c6['nextElementSibling']) {
            console['log']('after\x20targetSection');
            _0x4dc921 == null ? void 0x0 : _0x4dc921['insertBefore'](_0x5c18cc, _0x54c0c6['nextElementSibling']);
        } else {
            console['log']('child\x20of\x20targetSectionParent');
            _0x4dc921 == null ? void 0x0 : _0x4dc921['appendChild'](_0x5c18cc);
        }
    } else if (_0x59ec86) {
        console['log']('child\x20of\x20mainSection');
        _0x59ec86['appendChild'](_0x5c18cc);
    } else {
        console['log']('no\x20section\x20found');
    }
    _0x776516['render'](_0x36f55c['jsx'](_0x1db6c0, {
        'theme': _0x529d67,
        'extension': 'review-section'
    }), _0x5c18cc);
};
const insertStarSection = _0x287452 => {
    const _0x5c6cfc = document['getElementById']('bk-star-section');
    if (_0x5c6cfc) {
        console['log']('returned\x20because\x20already\x20star\x20section');
        return;
    }
    const _0x30d342 = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x2049e8 = [(_0x30d342 == null ? void 0x0 : _0x30d342['querySelector']('h1')) ?? document['querySelector']('h1') ?? (_0x30d342 == null ? void 0x0 : _0x30d342['querySelector']('h2')) ?? document['querySelector']('h2')];
    const _0x4cddc4 = '.small--hide\x20h1,\x20.small--hide\x20h2';
    const _0x11dd5f = document['querySelectorAll'](_0x4cddc4);
    _0x11dd5f['forEach'](_0x5de69b => {
        _0x2049e8['push'](_0x5de69b);
    });
    _0x2049e8['forEach'](_0x2b001b => {
        const _0x41dfa5 = _0x2b001b == null ? void 0x0 : _0x2b001b['parentElement'];
        const _0x57f8d8 = document['createElement']('div');
        _0x57f8d8['classList']['add']('bk-reviews', _0x287452);
        if (_0x2b001b && _0x41dfa5) {
            _0x2b001b['style']['marginBottom'] = '0';
            _0x41dfa5['insertBefore'](_0x57f8d8, _0x2b001b['nextSibling']);
            _0x776516['render'](_0x36f55c['jsx'](_0x1db6c0, {
                'theme': _0x287452,
                'extension': 'star-section'
            }), _0x57f8d8);
        }
    });
};
var e = Object['defineProperty'];
var r = function (_0x16a83f, _0xc718b5) {
    return e(_0x16a83f, 'name', {
        'value': _0xc718b5,
        'configurable': !![]
    });
};
var n = r(function (_0x4beaab) {
    _0x306c5['useEffect'](function () {
        var _0x2bc5d2 = document['head']['querySelectorAll']('style');
        var _0x1e4e3c = !![], _0x48a1e7 = ![], _0x50fb58 = void 0x0;
        try {
            for (var _0x571eb5 = _0x2bc5d2[Symbol['iterator']](), _0x2bfda6; !(_0x1e4e3c = (_0x2bfda6 = _0x571eb5['next']())['done']); _0x1e4e3c = !![]) {
                var _0x4fddb6 = _0x2bfda6['value'];
                if (_0x4fddb6['innerHTML'] === _0x4beaab)
                    return;
            }
        } catch (_0x48791d) {
            _0x48a1e7 = !![];
            _0x50fb58 = _0x48791d;
        } finally {
            try {
                if (!_0x1e4e3c && _0x571eb5['return'] != null) {
                    _0x571eb5['return']();
                }
            } finally {
                if (_0x48a1e7) {
                    throw _0x50fb58;
                }
            }
        }
        var _0x356a21 = document['createElement']('style');
        _0x356a21['innerHTML'] = _0x4beaab, document['head']['appendChild'](_0x356a21);
    }, [_0x4beaab]);
}, 'useStyleInjection');
const injectThemePreferencesStyle = _0x470469 => {
    if (!_0x470469)
        return;
    const _0x568713 = '.bk-reviews\x20>\x20*\x20{' + Object['entries'](_0x470469)['filter'](([_0x3b89d3]) => _0x3b89d3['includes']('Color'))['map'](([_0x17b6d1, _0xee2245]) => _0xee2245 && '--twc-' + _0x17b6d1['split']('Color')[0x0] + ':\x20' + _0x10be19(_0xee2245)['slice'](0x4, -0x1)['replaceAll'](',', ''))['join'](';\x20') + ';}';
    n(_0x568713);
};
function App() {
    const _0x24946a = _0x392038();
    const _0x3c17d5 = _0x10e8e5();
    const _0x24b3c6 = _0x5c8c70();
    const {reviewStatistics: _0x206c54} = _0x306c5['useContext'](_0x81f057);
    const {
        theme: _0x5ca927,
        setTheme: _0x581d0b,
        themePreferences: _0x35b157,
        setThemePreferences: _0x460f5c
    } = _0x306c5['useContext'](_0x13794b);
    _0x18571c();
    injectThemePreferencesStyle(_0x35b157);
    if (!_0x3c17d5)
        return null;
    let _0x1cc8ac = ![];
    let _0x5ab644 = ![];
    let _0x1e8464 = !![];
    if (_0x35b157 == null ? void 0x0 : _0x35b157['primaryColor']) {
        _0x1cc8ac = !(_0x206c54 == null ? void 0x0 : _0x206c54['reviewAmount']) && (_0x35b157 == null ? void 0x0 : _0x35b157['starsWithoutReviews']) === ![];
        _0x5ab644 = (_0x35b157 == null ? void 0x0 : _0x35b157['starsWithoutReviews']) === ![];
        _0x1e8464 = (_0x35b157 == null ? void 0x0 : _0x35b157['starsInBox']) === ![];
    }
    useCollectionStarSection(Boolean(_0x24b3c6), _0x3c17d5, _0x5ab644, !_0x1e8464);
    _0x306c5['useEffect'](() => {
        _0x24946a['getStorePreferences']()['then'](_0xc1dc77 => {
            const {
                theme: _0x5e48f4,
                theme_preferences: _0x3d6c96
            } = _0xc1dc77;
            _0x581d0b(_0x5e48f4);
            if (!_0x3d6c96 || !_0x460f5c)
                return;
            _0x460f5c(_0x3d6c96);
        })['catch'](() => {
            _0x581d0b('default');
        });
    }, []);
    _0x306c5['useEffect'](() => {
        var _0x130eb0;
        if (_0x3c17d5 && _0x24b3c6 && _0x5ca927 && _0x206c54) {
            (_0x130eb0 = document['querySelector']('#bk-reviews-root')) == null ? void 0x0 : _0x130eb0['setAttribute']('data-theme', _0x5ca927);
            if (!_0x1cc8ac) {
                insertStarSection(_0x5ca927);
                insertReviewSection(_0x5ca927);
            }
        }
    }, [
        _0x5ca927,
        _0x206c54,
        _0x3c17d5,
        _0x24b3c6,
        _0x1cc8ac
    ]);
    const _0x5ab2f3 = ![];
    return _0x5ab2f3 && _0x5ca927 !== void 0x0 ? _0x36f55c['jsxs'](_0x36f55c['Fragment'], {
        'children': [
            _0x36f55c['jsx'](_0x1db6c0, {
                'theme': _0x5ca927,
                'extension': 'star-section'
            }),
            _0x36f55c['jsx'](_0x1db6c0, {
                'theme': _0x5ca927,
                'extension': 'review-section'
            })
        ]
    }) : null;
}
_0x3f5a02['createRoot'](document['getElementById']('bk-reviews-root'))['render'](_0x36f55c['jsx'](_0xa7a67['StrictMode'], {
    'children': _0x36f55c['jsx'](_0x54bf91, {
        'i18n': _0x18dd3d,
        'children': _0x36f55c['jsx'](_0x18e11a, { 'children': _0x36f55c['jsx'](_0x41e3b7, { 'children': _0x36f55c['jsx'](_0x2492be, { 'children': _0x36f55c['jsx'](App, {}) }) }) })
    })
}));