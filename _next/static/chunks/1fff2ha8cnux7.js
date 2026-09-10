(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28105,t=>{"use strict";function e(t){let e=t>>>0;return()=>{let t=e=e+0x6d2b79f5>>>0;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/0x100000000}}function o(t){return Math.sqrt(-2*Math.log(Math.max(t(),1e-6)))*Math.cos(2*Math.PI*t())}class r{count;r;out;i;constructor(t,e){this.count=t,this.r=e,this.i=0,this.out=new Float32Array(4*t)}get full(){return this.i>=this.count}push(t,e,o,r=0){if(this.i>=this.count)return;let a=4*this.i;this.out[a]=t,this.out[a+1]=e,this.out[a+2]=o,this.out[a+3]=r,this.i++}fillHalo(t,e,r){let a=this.r;for(;!this.full;)this.push(o(a)*t,o(a)*e,o(a)*r,+(.3>a()))}line(t,e,r,a,l,n,i,u,f=0){let c=this.r;for(let h=0;h<i;h++){let i=c();this.push(t+(a-t)*i+o(c)*u,e+(l-e)*i+o(c)*u,r+(n-r)*i+o(c)*u,f)}}roundRect(t,e,r,a,l,n,i,u,f=0){let c=this.r,h=a/2-n,s=l/2-n,d=2*Math.PI*n,M=4*(h+s)+d;for(let m=0;m<i;m++){let i=c()*M,m=0,p=0;if(i<2*h)m=-h+i,p=l/2;else if((i-=2*h)<2*s)m=a/2,p=s-i;else if((i-=2*s)<2*h)m=h-i,p=-l/2;else if((i-=2*h)<2*s)m=-a/2,p=-s+i;else{let t=(i-=2*s)/d*Math.PI*2,e=Math.floor(t/(Math.PI/2)),o=0===e||3===e?h:-h,r=e<2?s:-s;m=o+Math.cos(t)*n,p=r+Math.sin(t)*n}this.push(t+m+o(c)*u,e+p+o(c)*u,r+o(c)*u,f)}}ring(t,e,r,a,l,n,i=0){let u=this.r;for(let f=0;f<l;f++){let l=u()*Math.PI*2;this.push(t+Math.cos(l)*a+o(u)*n,e+Math.sin(l)*a+o(u)*n,r+o(u)*n,i)}}disc(t,e,r,a,l,n=0){let i=this.r;for(let u=0;u<l;u++){let l=i()*Math.PI*2,u=Math.sqrt(i())*a;this.push(t+Math.cos(l)*u,e+Math.sin(l)*u,r+.02*o(i),n)}}sphere(t,e,o,r,a,l=0){let n=this.r;for(let i=0;i<a;i++){let a=2*n()-1,i=n()*Math.PI*2,u=Math.sqrt(1-a*a),f=r*(.85+.15*n());this.push(t+u*Math.cos(i)*f,e+u*Math.sin(i)*f,o+a*f,l)}}box(t,e,o,r,a,l,n,i=0){let u=r/2,f=a/2,c=l/2,h=[];for(let t of[-1,1])for(let e of[-1,1])h.push([-u,t*f,e*c,u,t*f,e*c]);for(let t of[-1,1])for(let e of[-1,1])h.push([t*u,-f,e*c,t*u,f,e*c]);for(let t of[-1,1])for(let e of[-1,1])h.push([t*u,e*f,-c,t*u,e*f,c]);let s=Math.max(1,Math.floor(n/h.length));for(let r of h)this.line(t+r[0],e+r[1],o+r[2],t+r[3],e+r[4],o+r[5],s,.018,i)}}function a(t,e,o,r,a,l,n){let i=t-o,u=e-r,f=a-o,c=l-r,h=Math.min(Math.max((i*f+u*c)/(f*f+c*c),0),1);return Math.hypot(i-f*h,u-c*h)-n}function l(t,e,o){let r=Math.min(Math.max(.5+.5*(e-t)/o,0),1);return e*(1-r)+t*r-o*r*(1-r)}function n(t,e){var o;let r,n,i=(o=e-.45,Math.hypot(Math.max(r=Math.abs(t)-2.35+.8,0),Math.max(n=Math.abs(o)-.95+.8,0))+Math.min(Math.max(r,n),0)-.8),u=a(t,e,-1.75,.1,-2.75,-1.95,.88),f=a(t,e,1.75,.1,2.75,-1.95,.88);return l(l(i,u,.7),f,.7)}function i(t){return t<.9?[7.4,11.8]:[17.5,9.6]}function u(t,e){for(let o=0;o<t.i;o++)t.out[4*o+1]+=e}let f={tunnel:[0,0,-34],controller:[0,.74,1],screen:[-.12,.45,.12],workstation:[0,1.8,.08],code:[0,0,1.05],network:[0,0,0],phone:[.05,.35,.12]};function c(t,a,l,i=7){let f=new r(a,e(i+131*t.length+t.charCodeAt(0)));switch(t){case"portal":!function(t,e){let r=t.r,a=e<.9,l=a?7.4:17.5,n=a?11.8:9.6,i=Math.floor(.74*t.count),u=2*(l+n);for(let e=0;e<i;e++){let e,a,i,f,c=r()*u;c<l?(e=-l/2+c,a=n/2,i=0,f=1):(c-=l)<n?(e=l/2,a=n/2-c,i=1,f=0):(c-=n)<l?(e=l/2-c,a=-n/2,i=0,f=-1):(c-=l,e=-l/2,a=-n/2+c,i=-1,f=0);let h=.55+.45*Math.sin(1.7*e+2.3*a)*Math.sin(.6*e-1.1*a),s=Math.abs(o(r))*(.08+.32*h)*(.12>r()?3.2:1),d=.35>r()?-1:1;e+=i*s*d+.05*o(r),a+=f*s*d+.05*o(r),t.push(e,a,o(r)*(.25+.9*s),+(.42>r()))}for(let[e,a]of[[-1,1],[1,1],[1,-1],[-1,-1]])for(let i=0;i<.012*t.count;i++)t.push(e*l/2+.22*o(r),a*n/2+.22*o(r),.3*o(r),+(.5>r()));t.fillHalo(.45*l,.45*n,3.5)}(f,l);break;case"tunnel":let h=f.r;for(;!f.full;){let t=h()*Math.PI*2,e=2.6+11*Math.pow(h(),.7),o=24-64*h();f.push(Math.cos(t)*e*1.35,Math.sin(t)*e*.85,o,+(.36>h()))}break;case"controller":!function(t){let e=t.r,r=Math.floor(.5*t.count),a=0;for(;t.i<r&&a++<40*t.count;){let r=(2*e()-1)*3.9,a=-3.2+5*e(),l=n(r,a);if(l>0)continue;let i=.62*Math.sqrt(Math.min(-l/.75,1))*(a<-.4?1.25:1),u=.72>e()?1:-1;t.push(1.45*r,1.45*a,u*i*1.45+.02*o(e),0)}let l=t.i+Math.floor(.2*t.count);for(a=0;t.i<l&&a++<60*t.count;){let r=(2*e()-1)*3.9,a=-3.2+5*e();Math.abs(n(r,a))>.035||t.push(1.45*r,1.45*a,.18*o(e)*1.45,+(.18>e()))}let i=.899+.05;for(let e of(t.roundRect(0,1.0875,i,3.045,1.3775,.14,Math.floor(.035*t.count),.012,0),[-1,1])){let o=.95*e*1.45;t.ring(o,-.7975,i+.05,.609,Math.floor(.022*t.count),.012,1),t.ring(o,-.7975,i+.32,.435,Math.floor(.014*t.count),.01,1),t.disc(o,-.7975,i+.34,.261,Math.floor(.006*t.count),.6)}for(let[e,o]of[[0,1],[1,0],[0,-1],[-1,0]])t.line(-2.9724999999999997+.16*e,.5075+.16*o,i,-2.9724999999999997+.44*e,.5075+.44*o,i,Math.floor(.004*t.count),.018,.2);for(let[e,o]of[[0,1],[1,0],[0,-1],[-1,0]])t.ring(2.9724999999999997+.36*e,.5075+.36*o,i,.1885,Math.floor(.005*t.count),.01,1);t.line(-1.305,1.972,i-.05,1.305,1.972,i-.05,Math.floor(.006*t.count),.012,1),t.disc(0,-.29,i,.11599999999999999,Math.floor(.003*t.count),1),t.fillHalo(4.2,3,2.2)}(f),u(f,1.03);break;case"screen":!function(t){let e=t.r;t.roundRect(0,.55,0,7.6,4.3,.18,Math.floor(.24*t.count),.015,0),t.roundRect(0,.55,-.12,7.6+.3,4.6,.25,Math.floor(.06*t.count),.03,1);for(let o=0;o<.12*t.count;o++)t.push((e()-.5)*7.6*.94,.55+(e()-.5)*3.956,.02,+(.2>e()));let r=Math.floor(.09*t.count);for(let a=0;a<r;a++){let r=e(),a=e();r+a>1&&(r=1-r,a=1-a),t.push(-.55+1.3*a,1.25-1.4*r-.7*a,.08+.03*o(e),1)}for(let e=0;e<5;e++)t.roundRect(-2.9+1.45*e,.55-1.45,.03,1.2,.62,.06,Math.floor(.018*t.count),.01,+(1===e));t.line(-3.4,-1.4,.04,.4,-1.4,.04,Math.floor(.025*t.count),.01,1),t.line(.4,-1.4,.04,3.4,-1.4,.04,Math.floor(.012*t.count),.01,0),t.line(0,.55-2.15,-.1,0,-2.6,-.1,Math.floor(.02*t.count),.05,0);for(let o=0;o<.04*t.count;o++){let o=e()*Math.PI*2,r=Math.sqrt(e());t.push(1.4*Math.cos(o)*r,-2.65,.55*Math.sin(o)*r-.1,0)}t.fillHalo(4.5,2.8,2)}(f),u(f,-.1);break;case"workstation":!function(t){let e=t.r,r=Math.floor(.2*t.count);for(let a=0;a<r;a++){let r,a;.7>e()?(r=(e()-.5)*.72,a=.9+(.5>e()?1.6:-1.6)):(r=(.5>e()?-.5:.5)*.72,a=.9+(2*e()-1)*1.6),t.push(7.5*Math.sin(r)+.015*o(e),a+.015*o(e),7.5-7.5*Math.cos(r)+.015*o(e),0)}for(let o=0;o<.16*t.count;o++){let o=(e()-.5)*.72*.96,r=.9+(2*e()-1)*1.6*.92;t.push(7.5*Math.sin(o),r,7.5-7.5*Math.cos(o)+.02,+!!(o>0&&.55>e()))}t.line(0,-.7000000000000001,.03,0,2.5,.03,Math.floor(.02*t.count),.008,1),t.roundRect(-4.6,1.1,1.6,1.5,3.2,.06,Math.floor(.07*t.count),.012,0);for(let o=0;o<14;o++){let r=.3+.9*e(),a=o%4*.12,l=2.4-.19*o;t.line(-4.6-.6+a,l,1.62,-4.6-.6+a+r,l,1.62,Math.floor(.0035*t.count),.006,+(o%5==0))}t.line(-6,-1.25,2.4,6,-1.25,2.4,Math.floor(.05*t.count),.02,1);for(let r=0;r<.06*t.count;r++)t.push((e()-.5)*12,-1.25+.02*o(e),2.4-2.6*e(),0);t.roundRect(-.4,-1.2,1.6,3,.5,.05,Math.floor(.03*t.count),.01,0),t.ring(2.1,-1.2,1.7,.2,Math.floor(.008*t.count),.01,0),t.box(5.2,.35,.6,1.3,3.1,1.8,Math.floor(.06*t.count),0);for(let e=0;e<3;e++)t.line(5+.2*e,-.8,1.52,5+.2*e,1.5,1.52,Math.floor(.01*t.count),.012,1);t.fillHalo(5.5,2.6,2.4)}(f),u(f,-.7);break;case"code":!function(t){let e=t.r,r=(r,a,l)=>{for(let n=0;n<l;n++){let l=2*e()-1,n=.45*Math.exp(-Math.pow(7*l,2)),i=.55*Math.pow(Math.abs(l),3)-n;t.push(r+a*i+.02*o(e),2.2*l+.02*o(e),.05*o(e),1)}};r(-3.6,1,Math.floor(.08*t.count)),r(3.6,-1,Math.floor(.08*t.count));let a=[0,.35,.7,.7,.35,.7,1.05,.7];for(let o=0;o<3;o++){let r=-(1.1*o);for(let l=0;l<16;l++){let n=1.9-.26*l,i=-2.8+a[l%8]+.3*o,u=1+Math.floor(4*e());for(let a=0;a<u&&i<2.8;a++){let a=.25+.9*e();t.line(i,n,r,Math.min(i+a,2.9),n,r,Math.floor(.0042*t.count*(1-.25*o)),.008,+(.22>e())),i+=a+.14}}}let l=Math.floor(.006*t.count);t.line(-.9,0,1,-.45,.4,1,l,.012,1),t.line(-.9,0,1,-.45,-.4,1,l,.012,1),t.line(.9,0,1,.45,.4,1,l,.012,1),t.line(.9,0,1,.45,-.4,1,l,.012,1),t.line(.18,.5,1,-.18,-.5,1,l,.012,0),t.fillHalo(3.4,2,1.4)}(f);break;case"network":!function(t){let e=t.r,r=[[0,0,0]],a=0;for(;r.length<17&&a++<4e3;){let t=2*e()-1,o=e()*Math.PI*2,a=Math.sqrt(1-t*t),l=1.4+2.2*e(),n=[a*Math.cos(o)*l*1.35,a*Math.sin(o)*l*.85,t*l*.9];r.every(t=>Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2])>1.25)&&r.push(n)}r.forEach((o,r)=>{let a=0===r;t.sphere(o[0],o[1],o[2],a?.55:.2+.18*e(),Math.floor(t.count*(a?.05:.018)),a||.35>e()?1:0)});for(let e=0;e<r.length;e++)for(let o of r.map((t,o)=>({j:o,d:Math.hypot(r[e][0]-t[0],r[e][1]-t[1],r[e][2]-t[2])})).filter(t=>t.j>e).sort((t,e)=>t.d-e.d).slice(0,0===e?5:2)){let a=r[o.j];t.line(r[e][0],r[e][1],r[e][2],a[0],a[1],a[2],Math.floor(.0065*t.count),.012,+(0===e))}for(let r=0;r<.05*t.count;r++){let r=e()*Math.PI*2;t.push(4.3*Math.cos(r),.35*Math.sin(r)+.03*o(e),2.2*Math.sin(r),0)}t.fillHalo(5,3,3)}(f);break;case"phone":!function(t){let e=t.r;t.roundRect(0,0,0,3.3,6.6,.5,Math.floor(.2*t.count),.014,0),t.roundRect(0,0,-.14,3.46,6.76,.56,Math.floor(.05*t.count),.03,1),t.line(-.42,3,.02,.42,3,.02,Math.floor(.008*t.count),.012,0);for(let o=0;o<.14*t.count;o++)t.push((e()-.5)*2.9,(e()-.5)*5.8,.02,+(.25>e()));let r=Math.floor(.07*t.count);for(let a=0;a<r;a++){let r=e(),a=e();r+a>1&&(r=1-r,a=1-a),t.push(-.35+.95*a,.9-1.1*r-.55*a,.1+.02*o(e),1)}for(let e=0;e<3;e++)t.ring(1.12,-.6-.62*e,.05,.19,Math.floor(.012*t.count),.01,+(0===e));t.disc(-1.05,-2.2,.05,.2,Math.floor(.01*t.count),1),t.line(-.7,-2.12,.04,.5,-2.12,.04,Math.floor(.012*t.count),.008,0),t.line(-1.25,-2.52,.04,.95,-2.52,.04,Math.floor(.012*t.count),.008,0),t.line(-1.4,-2.9,.05,.1,-2.9,.05,Math.floor(.018*t.count),.008,1),t.line(.1,-2.9,.05,1.4,-2.9,.05,Math.floor(.01*t.count),.008,0),t.roundRect(0,0,.03,3.3-.22,6.38,.4,Math.floor(.12*t.count),.012,0),t.fillHalo(1.5,2.2,.9)}(f)}f.fillHalo(4,3,2);let s=f.out,d=e(3*i+t.length);for(let t=a-1;t>0;t--){let e=Math.floor(d()*(t+1));for(let o=0;o<4;o++){let r=s[4*t+o];s[4*t+o]=s[4*e+o],s[4*e+o]=r}}return s}let h=`#version 300 es
layout(location=0) in vec2 aQuad;
out vec2 vUv;
void main(){ vUv = aQuad * 0.5 + 0.5; gl_Position = vec4(aQuad, 0.0, 1.0); }`,s=`#version 300 es
precision highp float;
in vec2 vUv;
uniform float uAspect;
uniform vec2 uGlowC;
uniform float uGlowR;
uniform float uGlowI;
out vec4 o;
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec2 p = vUv * 2.0 - 1.0;
  vec2 q = vec2(p.x * uAspect, p.y);
  vec2 c = vec2(uGlowC.x * uAspect, uGlowC.y);
  float d = length(q - c);
  float g = exp(-(d * d) / (uGlowR * uGlowR)) * uGlowI;
  vec3 col = vec3(0.0196);
  col += vec3(0.478, 0.0, 0.0) * g * 0.3;
  col += vec3(0.898, 0.035, 0.078) * g * g * 0.035;
  float vig = smoothstep(0.55, 1.75, length(p * vec2(1.0, 1.15)));
  col *= 1.0 - vig * 0.55;
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  o = vec4(col, 1.0);
}`,d=`#version 300 es
layout(location=0) in vec4 aPosA;
layout(location=1) in vec4 aPosB;
layout(location=2) in vec4 aSeed;   // x: aleatorio, y: retardo, z: tama\xf1o, w: tipo
layout(location=3) in vec3 aDust;
uniform mat4 uProj;
uniform mat4 uView;
uniform mat3 uRot;
uniform vec3 uCenter;
uniform float uMorph;
uniform float uScatter;
uniform float uTime;
uniform float uSizeK;
uniform float uCamZ;
uniform float uFocus;
uniform float uGain;
uniform float uFade;
uniform vec3 uPointer;
uniform float uPointerR;
uniform float uPointerStr;
out vec3 vColor;
out float vAlpha;
out float vBlur;
out float vKind;

vec3 hash3(float n){ return fract(sin(vec3(n, n + 1.7, n + 3.1)) * 43758.5453) * 2.0 - 1.0; }

void main(){
  float kind = aSeed.w;           // 0 enfocada, 1 suave, 2 polvo, 3 bokeh
  float seed = aSeed.x;
  vec3 world;
  float accent;
  if (kind < 1.5) {
    float delay = aSeed.y * 0.45;
    float m = smoothstep(delay, delay + 0.55, uMorph);
    vec3 local = mix(aPosA.xyz, aPosB.xyz, m);
    accent = mix(aPosA.w, aPosB.w, m);
    // Desintegraci\xf3n: la dispersi\xf3n culmina a mitad del morfeo.
    float burst = sin(3.14159265 * m) * uScatter;
    local += hash3(seed * 97.0) * burst * (0.8 + aSeed.y * 2.4);
    // Turbulencia ambiental muy lenta.
    float t = uTime * 0.22;
    local += 0.03 * vec3(sin(t * 1.3 + seed * 40.0), cos(t * 1.1 + seed * 53.0), sin(t * 0.9 + seed * 71.0));
    world = uRot * local + uCenter;
    // El cursor separa suavemente las part\xedculas cercanas; al alejarse vuelven solas.
    vec2 d = world.xy - uPointer.xy;
    float dl = length(d) + 1e-4;
    float fall = exp(-(dl * dl) / (uPointerR * uPointerR)) * uPointerStr;
    world.xy += (d / dl) * fall * uPointerR * 0.35;
    world.z += fall * uPointerR * 0.25;
  } else {
    // Polvo fijo en el mundo que se recicla por delante de la c\xe1mara.
    float depth = 72.0;
    float dd = mod(aDust.z + uCamZ, depth);
    world = vec3(aDust.xy, uCamZ - 0.4 - dd);
    world.xy += 0.18 * vec2(sin(uTime * 0.05 + seed * 30.0), cos(uTime * 0.04 + seed * 20.0));
    accent = step(0.6, aSeed.y);
  }

  vec4 mv = uView * vec4(world, 1.0);
  float z = -mv.z;
  if (z < 0.2) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
  gl_Position = uProj * mv;

  // Profundidad de campo: lo cercano se desenfoca mucho, lo lejano poco.
  float coc = (z - uFocus) / uFocus;
  float blur = coc < 0.0 ? clamp(-coc * 1.9, 0.0, 1.0) : clamp(coc * 0.45, 0.0, 0.6);
  if (kind > 0.5 && kind < 1.5) blur = max(blur, 0.55);
  if (kind > 2.5) blur = 1.0;
  float size = aSeed.z * uSizeK / z;
  float grow = 1.0 + blur * (kind > 2.5 ? 0.6 : 3.2);
  size *= grow;
  gl_PointSize = clamp(size, 1.4, 150.0);

  float twinkle = 0.78 + 0.22 * sin(uTime * (0.5 + aSeed.y * 0.9) + seed * 50.0);
  float alpha = twinkle / pow(grow, 1.35);
  alpha *= smoothstep(0.2, 2.5, z) * (1.0 - smoothstep(38.0, 70.0, z));
  if (kind < 1.5) alpha *= uGain;
  else if (kind < 2.5) alpha *= 0.55;
  else alpha *= 0.22;
  vAlpha = alpha * uFade;

  vec3 white = vec3(1.0, 0.965, 0.94);
  vec3 red = vec3(0.898, 0.035, 0.078);
  vec3 deep = vec3(0.478, 0.0, 0.0);
  vec3 col = mix(white, red, accent);
  col = mix(col, deep, accent * smoothstep(uFocus * 1.3, uFocus * 3.5, z));
  vColor = col;
  vBlur = blur;
  vKind = kind;
}`,M=`#version 300 es
precision highp float;
in vec3 vColor;
in float vAlpha;
in float vBlur;
in float vKind;
out vec4 o;
void main(){
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;
  float a;
  vec3 col = vColor;
  if (vKind > 2.5) {
    // Bokeh: disco suave con borde apenas m\xe1s brillante.
    a = (1.0 - smoothstep(0.82, 1.0, r)) * (0.55 + 0.45 * smoothstep(0.35, 0.9, r));
  } else {
    float soft = mix(0.55, 1.0, vBlur);
    a = 1.0 - smoothstep(1.0 - soft, 1.0, r);
    float core = exp(-r * r * 9.0) * (1.0 - vBlur);
    col = mix(col, vec3(1.0), core * 0.45);
  }
  o = vec4(col, a * vAlpha);
}`,m=`#version 300 es
layout(location=0) in vec2 aQuad;
uniform vec2 uPos;
uniform vec2 uSize;
out vec2 vP;
void main(){ vP = aQuad; gl_Position = vec4(uPos + aQuad * uSize, 0.0, 1.0); }`,p=`#version 300 es
precision highp float;
in vec2 vP;
uniform float uI;
out vec4 o;
void main(){
  vec2 p = vP;
  float r = length(p);
  float core = exp(-r * r * 90.0);
  float halo = exp(-r * 7.5) * 0.35;
  float fall = pow(max(1.0 - r, 0.0), 2.2);
  float rayH = exp(-abs(p.y) * 110.0) * pow(max(1.0 - abs(p.x), 0.0), 2.6);
  float rayV = exp(-abs(p.x) * 110.0) * pow(max(1.0 - abs(p.y), 0.0), 2.6);
  float rays = (rayH + rayV) * (0.55 + 0.45 * fall);
  vec3 white = vec3(1.0, 0.97, 0.95);
  vec3 red = vec3(0.898, 0.035, 0.078);
  vec3 rayCol = mix(white, red, smoothstep(0.02, 0.45, r));
  vec3 col = white * core * 1.6 + rayCol * rays * 0.9 + red * halo;
  float a = clamp(core * 1.6 + rays + halo, 0.0, 1.0);
  o = vec4(col * uI, a * uI);
}`;function v(t,e,o){let r=(e,o)=>{let r=t.createShader(e);if(t.shaderSource(r,o),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw Error(t.getShaderInfoLog(r)??"shader");return r},a=t.createProgram();if(t.attachShader(a,r(t.VERTEX_SHADER,e)),t.attachShader(a,r(t.FRAGMENT_SHADER,o)),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))throw Error(t.getProgramInfoLog(a)??"link");return a}function x(t,e,o){let r={};for(let a of o)r[a]=t.getUniformLocation(e,a);return r}let A=(t,e,o)=>Math.min(Math.max(t,e),o),w=(t,e,o)=>t+(e-t)*o,P=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;t.s(["createParticleEngine",0,function(t,r){let a=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!a)return null;let{keys:l,mobile:n,reducedMotion:u,lowPower:y}=r,R=(n?.36:1)*(y?.6:1),b=Math.round(26e3*R),g=Math.round(4200*R),F=b+g+(n?14:28),S=window.innerWidth/Math.max(window.innerHeight,1),I=(n?52:45)*Math.PI/180,B=Math.tan(I/2),T=new Map,_=t=>{let r,a=l[t].shape,n=T.get(a);if(n)return n;if("tunnel"===a){let t=l.findIndex(t=>"portal"===t.shape);r=function(t,r=11){let a=e(r),l=new Float32Array(t.length);for(let e=0;e<t.length;e+=4){let r=t[e],n=t[e+1],i=Math.hypot(r,n)||1,u=Math.atan2(n,r)+.08*o(a),f=Math.max(i*(.7+.9*a()),2.4+2*a());l[e]=Math.cos(u)*f*1.25,l[e+1]=Math.sin(u)*f*.85,l[e+2]=24-64*Math.pow(a(),.85),l[e+3]=t[e+3]}return l}(t>=0?_(t):c("portal",b,S))}else r=c(a,b,S);return T.set(a,r),r},C=v(a,h,s),E=v(a,d,M),z=v(a,m,p),k=x(a,C,["uAspect","uGlowC","uGlowR","uGlowI"]),D=x(a,E,["uProj","uView","uRot","uCenter","uMorph","uScatter","uTime","uSizeK","uCamZ","uFocus","uGain","uFade","uPointer","uPointerR","uPointerStr"]),G=x(a,z,["uPos","uSize","uI"]),U=a.createVertexArray();a.bindVertexArray(U);let V=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,V),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),a.STATIC_DRAW),a.enableVertexAttribArray(0),a.vertexAttribPointer(0,2,a.FLOAT,!1,0,0);let H=a.createVertexArray();a.bindVertexArray(H);let L=a.createBuffer(),Y=a.createBuffer();for(let[t,e]of[[L,0],[Y,1]])a.bindBuffer(a.ARRAY_BUFFER,t),a.bufferData(a.ARRAY_BUFFER,16*F,a.DYNAMIC_DRAW),a.enableVertexAttribArray(e),a.vertexAttribPointer(e,4,a.FLOAT,!1,0,0);let q=1234567,K=()=>(q=1664525*q+0x3c6ef35f>>>0)/0x100000000,j=new Float32Array(4*F),N=new Float32Array(3*F);for(let t=0;t<F;t++){let e,o=4*t;j[o]=K(),j[o+1]=K();let r=0;if(t<b){let t=.07>K();r=+!!t,e=t?.07+.08*K():.022+.05*Math.pow(K(),3)}else t<b+g?(r=2,e=.028+.06*Math.pow(K(),2.5)):(r=3,e=.35+.7*K());if(j[o+2]=e,j[o+3]=r,r>=2){let e=3*t,o=K()*Math.PI*2,r=1.5+22*Math.pow(K(),.6);N[e]=Math.cos(o)*r*1.2,N[e+1]=Math.sin(o)*r*.7,N[e+2]=72*K()}}let O=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,O),a.bufferData(a.ARRAY_BUFFER,j,a.STATIC_DRAW),a.enableVertexAttribArray(2),a.vertexAttribPointer(2,4,a.FLOAT,!1,0,0);let W=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,W),a.bufferData(a.ARRAY_BUFFER,N,a.STATIC_DRAW),a.enableVertexAttribArray(3),a.vertexAttribPointer(3,3,a.FLOAT,!1,0,0),a.bindVertexArray(null);let Q=-1,Z=[],X=0,J=0,$={x:0,y:0,tx:0,ty:0,str:0,tstr:0},tt=1,te=1,to=1,tr=!1,ta=0,tl=performance.now(),tn=8*!!u,ti=+!!u,tu=()=>{let e;tt=Math.min(window.devicePixelRatio||1,n?1.5:1.75),te=window.innerWidth,to=window.innerHeight;let o=te/Math.max(to,1),r=o<.9!=S<.9;S=o,t.width=Math.round(te*tt),t.height=Math.round(to*tt),r&&(T.delete("portal"),T.delete("tunnel"),Q=-1),e=S<.9,Z=l.map(t=>{let o,r=e?t.fracMobile:t.frac,a=Math.min(.86,1.3*r),l="portal"===t.shape?i(S).map(t=>t/2):t.fit,n=t.fixedDist??Math.max(l[0]/(B*S*r),l[1]/(B*a)),u=e?t.offMobile:t.off;if("portal"===t.shape){let[t,e]=i(S);o=[t/2,e/2,.3]}else o=f[t.shape];return{dist:n,center:[u[0]*n*B*S,u[1]*n*B,t.cz],star:o}}),tr||tf(0)},tf=e=>{var o,r;let i,f,c,h,s,d,M;if(u)J=X;else{let t=X-J;J=4e-4>Math.abs(t)?X:J+t*(1-Math.exp(-(5.5*e))),tn+=e,ti=Math.min(1,ti+.7*e)}let m=1-Math.exp(-(2.4*e));$.x+=($.tx-$.x)*m,$.y+=($.ty-$.y)*m,$.str+=($.tstr-$.str)*(1-Math.exp(-(3*e)));let p=l.length-1,v=A(J,0,p),x=Math.min(Math.floor(v),p-1),y=v-x,R=l[x],b=l[x+1],g=Z[x],T=Z[x+1],V=R.hold>0?P((o=R.hold,(i=A((y-o)/(1-R.hold-o),0,1))*i*(3-2*i))):P(y),q=w(y,V,.72);(t=>{if(t===Q)return;Q=t;let e=_(t),o=_(Math.min(t+1,l.length-1));a.bindBuffer(a.ARRAY_BUFFER,L),a.bufferSubData(a.ARRAY_BUFFER,0,e),a.bindBuffer(a.ARRAY_BUFFER,Y),a.bufferSubData(a.ARRAY_BUFFER,0,o)})(x);let K=w(g.dist,T.dist,q),j=[w(g.center[0],T.center[0],V),w(g.center[1],T.center[1],V),w(g.center[2],T.center[2],q)],N=w(R.parallax,b.parallax,V),O=S<.9?.35:1,W=w(R.yaw,b.yaw,V)*O+.24*$.x*N+.035*Math.sin(.13*tn)+.05*Math.sin(2.2*v),te=w(R.pitch,b.pitch,V)-.14*$.y*N+.02*Math.sin(.1*tn+1.3),to=(f=Math.cos(W),c=Math.sin(W),h=Math.cos(te),new Float32Array([f,0,-c,c*(s=Math.sin(te)),h,f*s,c*h,-s,f*h])),tr=.22*$.x*N,ta=.14*$.y*N,tl=j[2]+K,tu=(r=S,M=-1/199.9,new Float32Array([(d=1/Math.tan(I/2))/r,0,0,0,0,d,0,0,0,0,200.1*M,-1,0,0,40*M,0])),tf=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,-tr,-ta,-tl,1]),tc=t.width,th=t.height;a.viewport(0,0,tc,th),a.disable(a.DEPTH_TEST);let ts=t=>{let e=t[0]-tr,o=t[1]-ta,r=-(t[2]-tl);return{x:e/(r*B*S),y:o/(r*B),z:r}},td=ts(j);a.disable(a.BLEND),a.useProgram(C),a.uniform1f(k.uAspect,S),a.uniform2f(k.uGlowC,A(td.x,-1.5,1.5),A(td.y,-1.5,1.5)),a.uniform1f(k.uGlowR,n?.75:.95),a.uniform1f(k.uGlowI,w(R.glow,b.glow,V)*ti),a.bindVertexArray(U),a.drawArrays(a.TRIANGLE_STRIP,0,4),a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE),a.useProgram(E),a.uniformMatrix4fv(D.uProj,!1,tu),a.uniformMatrix4fv(D.uView,!1,tf),a.uniformMatrix3fv(D.uRot,!1,to),a.uniform3f(D.uCenter,j[0],j[1],j[2]),a.uniform1f(D.uMorph,V),a.uniform1f(D.uScatter,u?0:R.scatter),a.uniform1f(D.uTime,tn),a.uniform1f(D.uSizeK,th/(2*B)),a.uniform1f(D.uCamZ,tl),a.uniform1f(D.uFocus,K),a.uniform1f(D.uGain,w(R.gain,b.gain,V)),a.uniform1f(D.uFade,ti),a.uniform3f(D.uPointer,tr+$.x*B*S*K,ta+$.y*B*K,j[2]),a.uniform1f(D.uPointerR,.085*K),a.uniform1f(D.uPointerStr,u?0:$.str*N),a.bindVertexArray(H),a.drawArrays(a.POINTS,0,F);let tM=[w(g.star[0],T.star[0],V),w(g.star[1],T.star[1],V),w(g.star[2],T.star[2],V)],tm=[to[0]*tM[0]+to[3]*tM[1]+to[6]*tM[2],to[1]*tM[0]+to[4]*tM[1]+to[7]*tM[2],to[2]*tM[0]+to[5]*tM[1]+to[8]*tM[2]],tp=ts([tm[0]+j[0],tm[1]+j[1],tm[2]+j[2]]),tv=1-.55*Math.sin(Math.PI*V),tx=u?1:1+.06*Math.sin(1.05*tn),tA=w(R.starI,b.starI,V)*tv*ti*(.92+(tx-1));if(tp.z>.3&&tA>.01){let t=w(R.starPx,b.starPx,V)*tx*tt;a.blendFunc(a.SRC_ALPHA,a.ONE),a.useProgram(z),a.uniform2f(G.uPos,tp.x,tp.y),a.uniform2f(G.uSize,t/tc*2,t/th*2),a.uniform1f(G.uI,tA),a.bindVertexArray(U),a.drawArrays(a.TRIANGLE_STRIP,0,4)}a.bindVertexArray(null)},tc=t=>{if(!tr)return;let e=Math.min((t-tl)/1e3,.05);tl=t,tf(e),ta=requestAnimationFrame(tc)},th=()=>{tr=!1,cancelAnimationFrame(ta)};return tu(),{setProgress(t){X=t,u&&tf(0)},setPointer(t,e,o){$.tx=t,$.ty=e,$.tstr=+!!o},resize:tu,start:()=>{tr||u||(tr=!0,tl=performance.now(),ta=requestAnimationFrame(tc))},stop:th,destroy(){th(),a.getExtension("WEBGL_lose_context")?.loseContext()}}}],28105)}]);