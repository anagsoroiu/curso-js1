import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { enviromentsComponents } from './concepts/01-enviroments'
import { callbacksComponent } from './concepts/02-callback'
import { promiseComponent } from './concepts/03-promises'
import { promiseRaceComponent } from './concepts/04-promise-race'
import { asyncComponent } from './concepts/05-async'
import { asyncAwaitComponent } from './concepts/06-async-await'
import { asyncAwait2Component } from './concepts/07-async-await'
import { forAwaitComponent } from './concepts/08-for-await'
import { generatorFunctionsComponent } from './concepts/09-generators'
import { generatorsAsyncComponent } from './concepts/10-generators-async'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src=${viteLogo} class="vite" alt="Vite logo" />
  </div>

    <div class="card">
    </div>
</section>

<section id="spacer"></section>
`

const element = document.querySelector('.card');

// enviromentsComponents(element);
// callbacksComponent(element);
// promiseComponent(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwait2Component(element);
// forAwaitComponent(element);
// generatorFunctionsComponent(element);
generatorsAsyncComponent(element);