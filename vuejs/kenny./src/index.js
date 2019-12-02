import _ from 'lodash';
import $ from 'jquery';
import './css/index.css';
import './css/index.less';
import './css/index.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
//-------------------------------------------------------------
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
//-------------------------------------------------------------
$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})
//-------------------------------------------------------------
class Person {
  static info = { name: 'zs', age: 20 }
}