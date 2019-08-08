'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import consultationFooter from './modules/consultation-footer';
import sendingData from './modules/sendingDataFunc';
import checkList from './modules/checklist';
import discountPopup from './modules/discount-popup';
import moreThings from './modules/more-things';
import accordion from './modules/question-accordeon';
import headerFooterModal from './modules/header-footer';
import inputValid from './modules/inputs-validate';

//получаем вопрос от пользователя
consultationFooter();

//делаем чеклист
checkList();

//ajax
sendingData();

//скидочная модалка
discountPopup();

//более блоков
moreThings();

//аккордион
accordion();

//модальные окна header-footer
headerFooterModal();

//валидация инпутов
inputValid();
