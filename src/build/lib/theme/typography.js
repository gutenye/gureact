'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = exports.Body1 = exports.Body2 = exports.Subheading1 = exports.Subheading2 = exports.Title = exports.Headline = exports.Display1 = exports.Display2 = exports.Display3 = exports.Display4 = exports.Typography = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: Helvetica, Arial, sans-serif;\n'], ['\n  font-family: Helvetica, Arial, sans-serif;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 7rem; /* 112sp */\n  line-height: 7rem; /* 112sp */\n  font-weight: ', ';\n  letter-spacing: -0.04em;\n'], ['\n  font-size: 7rem; /* 112sp */\n  line-height: 7rem; /* 112sp */\n  font-weight: ', ';\n  letter-spacing: -0.04em;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 3.5rem; /* 56px */\n  line-height: 3.5rem; /* 56px */\n  font-weight: ', ';\n  letter-spacing: -0.02em;\n'], ['\n  font-size: 3.5rem; /* 56px */\n  line-height: 3.5rem; /* 56px */\n  font-weight: ', ';\n  letter-spacing: -0.02em;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 2.813rem; /* 45px */\n  line-height: 3rem; /* 48px */\n  font-weight: ', ';\n  letter-spacing: normal;\n'], ['\n  font-size: 2.813rem; /* 45px */\n  line-height: 3rem; /* 48px */\n  font-weight: ', ';\n  letter-spacing: normal;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 2.125rem; /* 34sp */\n  line-height: 2.5rem; /* 40sp */\n  font-weight: ', ';\n  letter-spacing: normal;\n'], ['\n  font-size: 2.125rem; /* 34sp */\n  line-height: 2.5rem; /* 40sp */\n  font-weight: ', ';\n  letter-spacing: normal;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 1.5rem; /* 24sp */\n  line-height: 2rem; /* 32sp */\n  font-weight: ', ';\n  letter-spacing: normal;\n'], ['\n  font-size: 1.5rem; /* 24sp */\n  line-height: 2rem; /* 32sp */\n  font-weight: ', ';\n  letter-spacing: normal;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  font-size: 1.25rem; /* 20sp */\n  line-height: 2rem; /* 32sp */\n  font-weight: ', ';\n  letter-spacing: 0.02em;\n  margin: 0.5rem 0;\n  text-align: ', ';\n'], ['\n  font-size: 1.25rem; /* 20sp */\n  line-height: 2rem; /* 32sp */\n  font-weight: ', ';\n  letter-spacing: 0.02em;\n  margin: 0.5rem 0;\n  text-align: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  font-size: 1rem; /* 16sp */\n  line-height: 1.75rem; /* 28sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n'], ['\n  font-size: 1rem; /* 16sp */\n  line-height: 1.75rem; /* 28sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  font-size: 0.938rem; /* 15sp */\n  line-height: 1.5rem; /* 24sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n'], ['\n  font-size: 0.938rem; /* 15sp */\n  line-height: 1.5rem; /* 24sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  font-size: 0.875rem; /* 14sp */\n  line-height: 1.5rem; /* 24sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n'], ['\n  font-size: 0.875rem; /* 14sp */\n  line-height: 1.5rem; /* 24sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  font-size: 0.875rem; /* 14sp */\n  line-height: 1.25rem; /* 20sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n'], ['\n  font-size: 0.875rem; /* 14sp */\n  line-height: 1.25rem; /* 20sp */\n  font-weight: ', ';\n  letter-spacing: 0.04em;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  font-size: 0.75rem; /* 12sp */\n  line-height: 1.25rem; /* 20sp */\n  font-weight: ', ';\n  letter-spacing: 0.08em;\n'], ['\n  font-size: 0.75rem; /* 12sp */\n  line-height: 1.25rem; /* 20sp */\n  font-weight: ', ';\n  letter-spacing: 0.08em;\n']);

var _vendor = require('@/vendor');

var _utils = require('./utils');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Typography = exports.Typography = _vendor.styled.div(_templateObject);

var Display4 = exports.Display4 = _vendor.styled.div(_templateObject2, _utils.fontWeightValues.light);
//margin: -1rem 0 3.5rem -.085em; /* -16sp 0 56sp -.085em */

var Display3 = exports.Display3 = _vendor.styled.div(_templateObject3, _utils.fontWeightValues.regular);
//margin: -8px 0 64px -.07em;

var Display2 = exports.Display2 = _vendor.styled.div(_templateObject4, _utils.fontWeightValues.regular);
//margin: -.5rem 0 4rem -.07em; /* -8sp 0 64sp -.07em */

var Display1 = exports.Display1 = _vendor.styled.div(_templateObject5, _utils.fontWeightValues.regular);
//margin: -.5rem 0 4rem -.07em; /* -8sp 0 64sp -.07em */

var Headline = exports.Headline = _vendor.styled.div(_templateObject6, _utils.fontWeightValues.regular);
//margin: -.5rem 0 1rem -.06em; /* -8sp 0 16sp -.06em */

var Title = exports.Title = _vendor.styled.div(_templateObject7, _utils.fontWeightValues.medium, function (p) {
  return p.center ? 'center' : 'inherit';
});
//margin: -.5rem 0 1rem -.05em; /* -8sp 0 16sp -.05em */

var Subheading2 = exports.Subheading2 = _vendor.styled.div(_templateObject8, _utils.fontWeightValues.regular);
//margin: -.5rem 0 1rem -.06em; /* -8sp 0 16sp -.06em */

var Subheading1 = exports.Subheading1 = _vendor.styled.div(_templateObject9, _utils.fontWeightValues.regular);
//margin: -.313rem 0 .813rem -.06em;

var Body2 = exports.Body2 = _vendor.styled.div(_templateObject10, _utils.fontWeightValues.medium);
//margin: -.25rem 0 .75rem 0; /* -4sp 0 12sp 0 */

var Body1 = exports.Body1 = _vendor.styled.div(_templateObject11, _utils.fontWeightValues.regular);
//margin: -.25rem 0 .75rem 0; /* -4sp 0 12sp 0 */

var Caption = exports.Caption = _vendor.styled.div(_templateObject12, _utils.fontWeightValues.regular);
//margin: -.5rem 0 1rem -.04em; /* -8sp 0 16sp -.04em */