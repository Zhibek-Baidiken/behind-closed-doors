// Regional counts transcribed from the student's uploaded PLS 419 draft.
// They are preliminary and should be checked against the original stat.gov.kz workbook.
// Do NOT interpret as prevalence or as a measure of access to services.
const data = {
  2025:[
    ['Astana',105,356,157],['Almaty city',79,399,140],['Shymkent',61,467,183],
    ['Abay',37,140,98],['Almaty region',115,320,199],['Akmola',54,185,104],
    ['Aktobe',37,262,139],['Atyrau',45,184,87],['East Kazakhstan',64,156,148],
    ['Karaganda',65,154,89],['Kostanay',30,144,89],['Kyzylorda',52,113,47],
    ['Mangystau',35,150,72],['North Kazakhstan',27,94,89],['Pavlodar',42,106,71],
    ['Turkistan',107,252,101],['Ulytau',22,70,44],['West Kazakhstan',61,230,110],
    ['Zhambyl',50,193,99],['Zhetisu',34,171,107]
  ],
  2017:[
    ['Astana',28,284,106],['Almaty city',48,263,123],['Shymkent',24,91,32],
    ['Almaty region',87,236,141],['Akmola',23,95,75],['Aktobe',34,85,37],
    ['Atyrau',21,38,25],['East Kazakhstan',69,167,128],['Karaganda',81,183,131],
    ['Kostanay',58,129,87],['Kyzylorda',27,41,18],['Mangystau',23,34,11],
    ['North Kazakhstan',17,51,53],['Pavlodar',29,111,90],['Turkistan',41,105,39],
    ['West Kazakhstan',26,76,61],['Zhambyl',42,88,53]
  ]
};
const chart=document.getElementById('chart');const year=document.getElementById('year');const metric=document.getElementById('metric');const note=document.getElementById('chartNote');
function renderChart(){const y=year.value;const idx={under18:1,age18to39:2,age40plus:3}[metric.value];const rows=data[y].map(row=>({name:row[0],value:metric.value==='total'?row[1]+row[2]+row[3]:row[idx]})).sort((a,b)=>b.value-a.value);const max=Math.max(...rows.map(x=>x.value));chart.replaceChildren();for(const row of rows){const el=document.createElement('div');el.className='bar-row';const label=document.createElement('span');label.textContent=row.name;const track=document.createElement('div');track.className='bar-track';const fill=document.createElement('div');fill.className='bar-fill';fill.style.width=(row.value/max*100)+'%';track.append(fill);const value=document.createElement('span');value.className='bar-value';value.textContent=row.value.toLocaleString('en-US');el.append(label,track,value);chart.append(el);}chart.setAttribute('aria-label',`${y} regional recorded counts for ${metric.options[metric.selectedIndex].text}`);note.textContent=`${y}: ${rows.length} geographic entries in the working draft. Counts are not population-adjusted. ${y==='2017'?'Historical administrative boundaries differ from 2025.':'The national indicator includes additional categories not shown as geographic regions.'}`;}
year.addEventListener('change',renderChart);metric.addEventListener('change',renderChart);renderChart();
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
