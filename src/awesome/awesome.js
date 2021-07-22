import {
    library
} from '@fortawesome/fontawesome-svg-core'

import {    
    faCloudSun, faPrint, faSave, faDownload, faQuestionCircle, faInfoCircle, faFileSignature, faTruck, faGem, faRegistered, faEllipsisV, faRetweet, faFile, faFileDownload, faCog, faListAlt
} from '@fortawesome/free-solid-svg-icons'

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faCloudSun, faPrint, faSave, faDownload, faQuestionCircle, faInfoCircle, faFileSignature, faTruck, faGem, faRegistered, faEllipsisV, faRetweet, faFile, faFileDownload, faCog, faListAlt);


// awesome по умолчанию работает только синтаксис типа <font-awesome-icon icon="coffee" />
// awesome включаем преобразование из i в svg, после этого будет работать синтаксис типа <i class=”fas fa-coffee”></i>
// импорт можно сделать сразу в одной строке- import { library, dom } - но специально выделил отдельно импорт для преобразования, 
// в целях подключения и отключения при разработке ...
// эта возможность имеет дополнительный эффект - <font-awesome-icon icon="coffee" /> эта конструкция является компонентом,
// что-бы она работала нужно зарегистрировать компонент общий, например, так app.component('font-awesome-icon', FontAwesomeIcon)
// а это <i class=”fas fa-coffee”></i> является разметкой html, и не зависит от регистрации общего компонента, работать будет и без него
// замечено при тестировании ....

import {
    dom
} from '@fortawesome/fontawesome-svg-core'

dom.watch()

export default {}