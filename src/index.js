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

//получаем вопрос от пользователя
consultationFooter();

//делаем чеклист
checkList();

//ajax
sendingData();

//скидочная модалка
discountPopup();
