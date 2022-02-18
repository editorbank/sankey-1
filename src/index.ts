console.log("index.ts Start ...");

import { ISankeyData } from './ISankeyData';
import { SankeyChart } from "./SankeyChart";

if(window) window.onload = () => {
    console.log("on_load() Start ...");
    fetch('data.json')
        .then(response => response?.json())
        .then(
            json => {
                console.log('Json start ...');
                document.body.appendChild(SankeyChart(json as ISankeyData))
                console.log('Json Done.');
            }
        ).catch(
            err=>{
                var div = document.createElement('h1');
                div.style.color = 'red';
                div.innerText=err;
                document.body.appendChild(div);
            }
        );
  
    console.log("on_load() Done.");
  }
  ;

console.log("index.ts Done.");
