import Pagination from 'tui-pagination';
import arrowLeft from '../images/arrow-left.svg';
// import 'tui-pagination/dist/tui-pagination.css';

const container = document.querySelector('#pagination');

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      `<img src="${arrowLeft}" class="arrow next tui-ico-{{type}}" alt="arrow next" />` +
      '</a>',
    // '<a href="#" class="tui-page-btn tui-{{type}}">' +
    // '<span class="tui-ico-{{type}}">#</span>' +

    // '</a>',
    disabledMoveButton:
      // `<img src="${arrowLeft}" class="arrow tui-ico-{{type}}" alt="arrow next" />` +
      // '<span class="tui-ico-ellip dots">...</span>' +
      // '<span class="tui-ico-ellip dots">...</span>' +
      // `<img src="${arrowLeft}" class="arrow next tui-ico-{{type}}" alt="arrow next" />`,
      '<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      `<img src="${arrowLeft}" class="arrow tui-ico-{{type}}" alt="arrow next" />` +
      '</a>',

    // `<img src="${arrowLeft}" class="arrow tui-ico-{{type}}" alt="arrow next" />` +
    // // '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
    // // '<span class="tui-ico-{{type}}"></span>' +
    // `<img src="${arrowLeft}" class="arrow tui-ico-{{type}}" alt="arrow next" />` +
    // '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip dots">...</span>' +
      '</a>',
  },
};

//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//       '</a>'
//   }
// };

export const pagination = new Pagination(container, options);
