(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28105,t=>{"use strict";function e(t){let e=t>>>0;return()=>{let t=e=e+0x6d2b79f5>>>0;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/0x100000000}}function o(t){return Math.sqrt(-2*Math.log(Math.max(t(),1e-6)))*Math.cos(2*Math.PI*t())}class a{count;r;out;i;constructor(t,e){this.count=t,this.r=e,this.i=0,this.out=new Float32Array(4*t)}get full(){return this.i>=this.count}push(t,e,o,a=0){if(this.i>=this.count)return;let r=4*this.i;this.out[r]=t,this.out[r+1]=e,this.out[r+2]=o,this.out[r+3]=a,this.i++}fillHalo(t,e,a){let r=this.r;for(;!this.full;)this.push(o(r)*t,o(r)*e,o(r)*a,+(.3>r()))}line(t,e,a,r,l,n,i,u,f=0){let c=this.r;for(let h=0;h<i;h++){let i=c();this.push(t+(r-t)*i+o(c)*u,e+(l-e)*i+o(c)*u,a+(n-a)*i+o(c)*u,f)}}roundRect(t,e,a,r,l,n,i,u,f=0){let c=this.r,h=r/2-n,s=l/2-n,d=2*Math.PI*n,M=4*(h+s)+d;for(let m=0;m<i;m++){let i=c()*M,m=0,p=0;if(i<2*h)m=-h+i,p=l/2;else if((i-=2*h)<2*s)m=r/2,p=s-i;else if((i-=2*s)<2*h)m=h-i,p=-l/2;else if((i-=2*h)<2*s)m=-r/2,p=-s+i;else{let t=(i-=2*s)/d*Math.PI*2,e=Math.floor(t/(Math.PI/2)),o=0===e||3===e?h:-h,a=e<2?s:-s;m=o+Math.cos(t)*n,p=a+Math.sin(t)*n}this.push(t+m+o(c)*u,e+p+o(c)*u,a+o(c)*u,f)}}ring(t,e,a,r,l,n,i=0){let u=this.r;for(let f=0;f<l;f++){let l=u()*Math.PI*2;this.push(t+Math.cos(l)*r+o(u)*n,e+Math.sin(l)*r+o(u)*n,a+o(u)*n,i)}}disc(t,e,a,r,l,n=0){let i=this.r;for(let u=0;u<l;u++){let l=i()*Math.PI*2,u=Math.sqrt(i())*r;this.push(t+Math.cos(l)*u,e+Math.sin(l)*u,a+.02*o(i),n)}}sphere(t,e,o,a,r,l=0){let n=this.r;for(let i=0;i<r;i++){let r=2*n()-1,i=n()*Math.PI*2,u=Math.sqrt(1-r*r),f=a*(.85+.15*n());this.push(t+u*Math.cos(i)*f,e+u*Math.sin(i)*f,o+r*f,l)}}box(t,e,o,a,r,l,n,i=0){let u=a/2,f=r/2,c=l/2,h=[];for(let t of[-1,1])for(let e of[-1,1])h.push([-u,t*f,e*c,u,t*f,e*c]);for(let t of[-1,1])for(let e of[-1,1])h.push([t*u,-f,e*c,t*u,f,e*c]);for(let t of[-1,1])for(let e of[-1,1])h.push([t*u,e*f,-c,t*u,e*f,c]);let s=Math.max(1,Math.floor(n/h.length));for(let a of h)this.line(t+a[0],e+a[1],o+a[2],t+a[3],e+a[4],o+a[5],s,.018,i)}}function r(t,e,o,a,r,l,n){let i=t-o,u=e-a,f=r-o,c=l-a,h=Math.min(Math.max((i*f+u*c)/(f*f+c*c),0),1);return Math.hypot(i-f*h,u-c*h)-n}function l(t,e,o){let a=Math.min(Math.max(.5+.5*(e-t)/o,0),1);return e*(1-a)+t*a-o*a*(1-a)}function n(t,e){var o;let a,n,i=(o=e-.45,Math.hypot(Math.max(a=Math.abs(t)-2.35+.8,0),Math.max(n=Math.abs(o)-.95+.8,0))+Math.min(Math.max(a,n),0)-.8),u=r(t,e,-1.75,.1,-2.75,-1.95,.88),f=r(t,e,1.75,.1,2.75,-1.95,.88);return l(l(i,u,.7),f,.7)}function i(t){return t<.9?[7.4,11.8]:[17.5,9.6]}function u(t,e){for(let o=0;o<t.i;o++)t.out[4*o+1]+=e}let f={tunnel:[0,0,-34],controller:[0,.74,1],screen:[-.12,.45,.12],workstation:[0,1.8,.08],code:[0,0,1.05],network:[0,0,0]};function c(t,r,l,i=7){let f=new a(r,e(i+131*t.length+t.charCodeAt(0)));switch(t){case"portal":!function(t,e){let a=t.r,r=e<.9,l=r?7.4:17.5,n=r?11.8:9.6,i=Math.floor(.74*t.count),u=2*(l+n);for(let e=0;e<i;e++){let e,r,i,f,c=a()*u;c<l?(e=-l/2+c,r=n/2,i=0,f=1):(c-=l)<n?(e=l/2,r=n/2-c,i=1,f=0):(c-=n)<l?(e=l/2-c,r=-n/2,i=0,f=-1):(c-=l,e=-l/2,r=-n/2+c,i=-1,f=0);let h=.55+.45*Math.sin(1.7*e+2.3*r)*Math.sin(.6*e-1.1*r),s=Math.abs(o(a))*(.08+.32*h)*(.12>a()?3.2:1),d=.35>a()?-1:1;e+=i*s*d+.05*o(a),r+=f*s*d+.05*o(a),t.push(e,r,o(a)*(.25+.9*s),+(.42>a()))}for(let[e,r]of[[-1,1],[1,1],[1,-1],[-1,-1]])for(let i=0;i<.012*t.count;i++)t.push(e*l/2+.22*o(a),r*n/2+.22*o(a),.3*o(a),+(.5>a()));t.fillHalo(.45*l,.45*n,3.5)}(f,l);break;case"tunnel":let h=f.r;for(;!f.full;){let t=h()*Math.PI*2,e=2.6+11*Math.pow(h(),.7),o=24-64*h();f.push(Math.cos(t)*e*1.35,Math.sin(t)*e*.85,o,+(.36>h()))}break;case"controller":!function(t){let e=t.r,a=Math.floor(.5*t.count),r=0;for(;t.i<a&&r++<40*t.count;){let a=(2*e()-1)*3.9,r=-3.2+5*e(),l=n(a,r);if(l>0)continue;let i=.62*Math.sqrt(Math.min(-l/.75,1))*(r<-.4?1.25:1),u=.72>e()?1:-1;t.push(1.45*a,1.45*r,u*i*1.45+.02*o(e),0)}let l=t.i+Math.floor(.2*t.count);for(r=0;t.i<l&&r++<60*t.count;){let a=(2*e()-1)*3.9,r=-3.2+5*e();Math.abs(n(a,r))>.035||t.push(1.45*a,1.45*r,.18*o(e)*1.45,+(.18>e()))}let i=.899+.05;for(let e of(t.roundRect(0,1.0875,i,3.045,1.3775,.14,Math.floor(.035*t.count),.012,0),[-1,1])){let o=.95*e*1.45;t.ring(o,-.7975,i+.05,.609,Math.floor(.022*t.count),.012,1),t.ring(o,-.7975,i+.32,.435,Math.floor(.014*t.count),.01,1),t.disc(o,-.7975,i+.34,.261,Math.floor(.006*t.count),.6)}for(let[e,o]of[[0,1],[1,0],[0,-1],[-1,0]])t.line(-2.9724999999999997+.16*e,.5075+.16*o,i,-2.9724999999999997+.44*e,.5075+.44*o,i,Math.floor(.004*t.count),.018,.2);for(let[e,o]of[[0,1],[1,0],[0,-1],[-1,0]])t.ring(2.9724999999999997+.36*e,.5075+.36*o,i,.1885,Math.floor(.005*t.count),.01,1);t.line(-1.305,1.972,i-.05,1.305,1.972,i-.05,Math.floor(.006*t.count),.012,1),t.disc(0,-.29,i,.11599999999999999,Math.floor(.003*t.count),1),t.fillHalo(4.2,3,2.2)}(f),u(f,1.03);break;case"screen":!function(t){let e=t.r;t.roundRect(0,.55,0,7.6,4.3,.18,Math.floor(.24*t.count),.015,0),t.roundRect(0,.55,-.12,7.6+.3,4.6,.25,Math.floor(.06*t.count),.03,1);for(let o=0;o<.12*t.count;o++)t.push((e()-.5)*7.6*.94,.55+(e()-.5)*3.956,.02,+(.2>e()));let a=Math.floor(.09*t.count);for(let r=0;r<a;r++){let a=e(),r=e();a+r>1&&(a=1-a,r=1-r),t.push(-.55+1.3*r,1.25-1.4*a-.7*r,.08+.03*o(e),1)}for(let e=0;e<5;e++)t.roundRect(-2.9+1.45*e,.55-1.45,.03,1.2,.62,.06,Math.floor(.018*t.count),.01,+(1===e));t.line(-3.4,-1.4,.04,.4,-1.4,.04,Math.floor(.025*t.count),.01,1),t.line(.4,-1.4,.04,3.4,-1.4,.04,Math.floor(.012*t.count),.01,0),t.line(0,.55-2.15,-.1,0,-2.6,-.1,Math.floor(.02*t.count),.05,0);for(let o=0;o<.04*t.count;o++){let o=e()*Math.PI*2,a=Math.sqrt(e());t.push(1.4*Math.cos(o)*a,-2.65,.55*Math.sin(o)*a-.1,0)}t.fillHalo(4.5,2.8,2)}(f),u(f,-.1);break;case"workstation":!function(t){let e=t.r,a=Math.floor(.2*t.count);for(let r=0;r<a;r++){let a,r;.7>e()?(a=(e()-.5)*.72,r=.9+(.5>e()?1.6:-1.6)):(a=(.5>e()?-.5:.5)*.72,r=.9+(2*e()-1)*1.6),t.push(7.5*Math.sin(a)+.015*o(e),r+.015*o(e),7.5-7.5*Math.cos(a)+.015*o(e),0)}for(let o=0;o<.16*t.count;o++){let o=(e()-.5)*.72*.96,a=.9+(2*e()-1)*1.6*.92;t.push(7.5*Math.sin(o),a,7.5-7.5*Math.cos(o)+.02,+!!(o>0&&.55>e()))}t.line(0,-.7000000000000001,.03,0,2.5,.03,Math.floor(.02*t.count),.008,1),t.roundRect(-4.6,1.1,1.6,1.5,3.2,.06,Math.floor(.07*t.count),.012,0);for(let o=0;o<14;o++){let a=.3+.9*e(),r=o%4*.12,l=2.4-.19*o;t.line(-4.6-.6+r,l,1.62,-4.6-.6+r+a,l,1.62,Math.floor(.0035*t.count),.006,+(o%5==0))}t.line(-6,-1.25,2.4,6,-1.25,2.4,Math.floor(.05*t.count),.02,1);for(let a=0;a<.06*t.count;a++)t.push((e()-.5)*12,-1.25+.02*o(e),2.4-2.6*e(),0);t.roundRect(-.4,-1.2,1.6,3,.5,.05,Math.floor(.03*t.count),.01,0),t.ring(2.1,-1.2,1.7,.2,Math.floor(.008*t.count),.01,0),t.box(5.2,.35,.6,1.3,3.1,1.8,Math.floor(.06*t.count),0);for(let e=0;e<3;e++)t.line(5+.2*e,-.8,1.52,5+.2*e,1.5,1.52,Math.floor(.01*t.count),.012,1);t.fillHalo(5.5,2.6,2.4)}(f),u(f,-.7);break;case"code":!function(t){let e=t.r,a=(a,r,l)=>{for(let n=0;n<l;n++){let l=2*e()-1,n=.45*Math.exp(-Math.pow(7*l,2)),i=.55*Math.pow(Math.abs(l),3)-n;t.push(a+r*i+.02*o(e),2.2*l+.02*o(e),.05*o(e),1)}};a(-3.6,1,Math.floor(.08*t.count)),a(3.6,-1,Math.floor(.08*t.count));let r=[0,.35,.7,.7,.35,.7,1.05,.7];for(let o=0;o<3;o++){let a=-(1.1*o);for(let l=0;l<16;l++){let n=1.9-.26*l,i=-2.8+r[l%8]+.3*o,u=1+Math.floor(4*e());for(let r=0;r<u&&i<2.8;r++){let r=.25+.9*e();t.line(i,n,a,Math.min(i+r,2.9),n,a,Math.floor(.0042*t.count*(1-.25*o)),.008,+(.22>e())),i+=r+.14}}}let l=Math.floor(.006*t.count);t.line(-.9,0,1,-.45,.4,1,l,.012,1),t.line(-.9,0,1,-.45,-.4,1,l,.012,1),t.line(.9,0,1,.45,.4,1,l,.012,1),t.line(.9,0,1,.45,-.4,1,l,.012,1),t.line(.18,.5,1,-.18,-.5,1,l,.012,0),t.fillHalo(3.4,2,1.4)}(f);break;case"network":!function(t){let e=t.r,a=[[0,0,0]],r=0;for(;a.length<17&&r++<4e3;){let t=2*e()-1,o=e()*Math.PI*2,r=Math.sqrt(1-t*t),l=1.4+2.2*e(),n=[r*Math.cos(o)*l*1.35,r*Math.sin(o)*l*.85,t*l*.9];a.every(t=>Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2])>1.25)&&a.push(n)}a.forEach((o,a)=>{let r=0===a;t.sphere(o[0],o[1],o[2],r?.55:.2+.18*e(),Math.floor(t.count*(r?.05:.018)),r||.35>e()?1:0)});for(let e=0;e<a.length;e++)for(let o of a.map((t,o)=>({j:o,d:Math.hypot(a[e][0]-t[0],a[e][1]-t[1],a[e][2]-t[2])})).filter(t=>t.j>e).sort((t,e)=>t.d-e.d).slice(0,0===e?5:2)){let r=a[o.j];t.line(a[e][0],a[e][1],a[e][2],r[0],r[1],r[2],Math.floor(.0065*t.count),.012,+(0===e))}for(let a=0;a<.05*t.count;a++){let a=e()*Math.PI*2;t.push(4.3*Math.cos(a),.35*Math.sin(a)+.03*o(e),2.2*Math.sin(a),0)}t.fillHalo(5,3,3)}(f)}f.fillHalo(4,3,2);let s=f.out,d=e(3*i+t.length);for(let t=r-1;t>0;t--){let e=Math.floor(d()*(t+1));for(let o=0;o<4;o++){let a=s[4*t+o];s[4*t+o]=s[4*e+o],s[4*e+o]=a}}return s}let h=`#version 300 es
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
}`;function v(t,e,o){let a=(e,o)=>{let a=t.createShader(e);if(t.shaderSource(a,o),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS))throw Error(t.getShaderInfoLog(a)??"shader");return a},r=t.createProgram();if(t.attachShader(r,a(t.VERTEX_SHADER,e)),t.attachShader(r,a(t.FRAGMENT_SHADER,o)),t.linkProgram(r),!t.getProgramParameter(r,t.LINK_STATUS))throw Error(t.getProgramInfoLog(r)??"link");return r}function x(t,e,o){let a={};for(let r of o)a[r]=t.getUniformLocation(e,r);return a}let A=(t,e,o)=>Math.min(Math.max(t,e),o),w=(t,e,o)=>t+(e-t)*o,P=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;t.s(["createParticleEngine",0,function(t,a){let r=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!r)return null;let{keys:l,mobile:n,reducedMotion:u,lowPower:y}=a,b=(n?.36:1)*(y?.6:1),R=Math.round(26e3*b),g=Math.round(4200*b),F=R+g+(n?14:28),S=window.innerWidth/Math.max(window.innerHeight,1),I=(n?52:45)*Math.PI/180,B=Math.tan(I/2),T=new Map,_=t=>{let a,r=l[t].shape,n=T.get(r);if(n)return n;if("tunnel"===r){let t=l.findIndex(t=>"portal"===t.shape);a=function(t,a=11){let r=e(a),l=new Float32Array(t.length);for(let e=0;e<t.length;e+=4){let a=t[e],n=t[e+1],i=Math.hypot(a,n)||1,u=Math.atan2(n,a)+.08*o(r),f=Math.max(i*(.7+.9*r()),2.4+2*r());l[e]=Math.cos(u)*f*1.25,l[e+1]=Math.sin(u)*f*.85,l[e+2]=24-64*Math.pow(r(),.85),l[e+3]=t[e+3]}return l}(t>=0?_(t):c("portal",R,S))}else a=c(r,R,S);return T.set(r,a),a},C=v(r,h,s),E=v(r,d,M),z=v(r,m,p),k=x(r,C,["uAspect","uGlowC","uGlowR","uGlowI"]),D=x(r,E,["uProj","uView","uRot","uCenter","uMorph","uScatter","uTime","uSizeK","uCamZ","uFocus","uGain","uFade","uPointer","uPointerR","uPointerStr"]),G=x(r,z,["uPos","uSize","uI"]),U=r.createVertexArray();r.bindVertexArray(U);let V=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,V),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(0),r.vertexAttribPointer(0,2,r.FLOAT,!1,0,0);let H=r.createVertexArray();r.bindVertexArray(H);let L=r.createBuffer(),Y=r.createBuffer();for(let[t,e]of[[L,0],[Y,1]])r.bindBuffer(r.ARRAY_BUFFER,t),r.bufferData(r.ARRAY_BUFFER,16*F,r.DYNAMIC_DRAW),r.enableVertexAttribArray(e),r.vertexAttribPointer(e,4,r.FLOAT,!1,0,0);let q=1234567,K=()=>(q=1664525*q+0x3c6ef35f>>>0)/0x100000000,j=new Float32Array(4*F),N=new Float32Array(3*F);for(let t=0;t<F;t++){let e,o=4*t;j[o]=K(),j[o+1]=K();let a=0;if(t<R){let t=.07>K();a=+!!t,e=t?.07+.08*K():.022+.05*Math.pow(K(),3)}else t<R+g?(a=2,e=.028+.06*Math.pow(K(),2.5)):(a=3,e=.35+.7*K());if(j[o+2]=e,j[o+3]=a,a>=2){let e=3*t,o=K()*Math.PI*2,a=1.5+22*Math.pow(K(),.6);N[e]=Math.cos(o)*a*1.2,N[e+1]=Math.sin(o)*a*.7,N[e+2]=72*K()}}let O=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,O),r.bufferData(r.ARRAY_BUFFER,j,r.STATIC_DRAW),r.enableVertexAttribArray(2),r.vertexAttribPointer(2,4,r.FLOAT,!1,0,0);let W=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,W),r.bufferData(r.ARRAY_BUFFER,N,r.STATIC_DRAW),r.enableVertexAttribArray(3),r.vertexAttribPointer(3,3,r.FLOAT,!1,0,0),r.bindVertexArray(null);let Q=-1,Z=[],X=0,J=0,$={x:0,y:0,tx:0,ty:0,str:0,tstr:0},tt=1,te=1,to=1,ta=!1,tr=0,tl=performance.now(),tn=8*!!u,ti=+!!u,tu=()=>{let e;tt=Math.min(window.devicePixelRatio||1,n?1.5:1.75),te=window.innerWidth,to=window.innerHeight;let o=te/Math.max(to,1),a=o<.9!=S<.9;S=o,t.width=Math.round(te*tt),t.height=Math.round(to*tt),a&&(T.delete("portal"),T.delete("tunnel"),Q=-1),e=S<.9,Z=l.map(t=>{let o,a=e?t.fracMobile:t.frac,r=Math.min(.86,1.3*a),l="portal"===t.shape?i(S).map(t=>t/2):t.fit,n=t.fixedDist??Math.max(l[0]/(B*S*a),l[1]/(B*r)),u=e?t.offMobile:t.off;if("portal"===t.shape){let[t,e]=i(S);o=[t/2,e/2,.3]}else o=f[t.shape];return{dist:n,center:[u[0]*n*B*S,u[1]*n*B,t.cz],star:o}}),ta||tf(0)},tf=e=>{var o,a;let i,f,c,h,s,d,M;if(u)J=X;else{let t=X-J;J=4e-4>Math.abs(t)?X:J+t*(1-Math.exp(-(5.5*e))),tn+=e,ti=Math.min(1,ti+.7*e)}let m=1-Math.exp(-(2.4*e));$.x+=($.tx-$.x)*m,$.y+=($.ty-$.y)*m,$.str+=($.tstr-$.str)*(1-Math.exp(-(3*e)));let p=l.length-1,v=A(J,0,p),x=Math.min(Math.floor(v),p-1),y=v-x,b=l[x],R=l[x+1],g=Z[x],T=Z[x+1],V=b.hold>0?P((o=b.hold,(i=A((y-o)/(1-b.hold-o),0,1))*i*(3-2*i))):P(y),q=w(y,V,.72);(t=>{if(t===Q)return;Q=t;let e=_(t),o=_(Math.min(t+1,l.length-1));r.bindBuffer(r.ARRAY_BUFFER,L),r.bufferSubData(r.ARRAY_BUFFER,0,e),r.bindBuffer(r.ARRAY_BUFFER,Y),r.bufferSubData(r.ARRAY_BUFFER,0,o)})(x);let K=w(g.dist,T.dist,q),j=[w(g.center[0],T.center[0],V),w(g.center[1],T.center[1],V),w(g.center[2],T.center[2],q)],N=w(b.parallax,R.parallax,V),O=S<.9?.35:1,W=w(b.yaw,R.yaw,V)*O+.24*$.x*N+.035*Math.sin(.13*tn)+.05*Math.sin(2.2*v),te=w(b.pitch,R.pitch,V)-.14*$.y*N+.02*Math.sin(.1*tn+1.3),to=(f=Math.cos(W),c=Math.sin(W),h=Math.cos(te),new Float32Array([f,0,-c,c*(s=Math.sin(te)),h,f*s,c*h,-s,f*h])),ta=.22*$.x*N,tr=.14*$.y*N,tl=j[2]+K,tu=(a=S,M=-1/199.9,new Float32Array([(d=1/Math.tan(I/2))/a,0,0,0,0,d,0,0,0,0,200.1*M,-1,0,0,40*M,0])),tf=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,-ta,-tr,-tl,1]),tc=t.width,th=t.height;r.viewport(0,0,tc,th),r.disable(r.DEPTH_TEST);let ts=t=>{let e=t[0]-ta,o=t[1]-tr,a=-(t[2]-tl);return{x:e/(a*B*S),y:o/(a*B),z:a}},td=ts(j);r.disable(r.BLEND),r.useProgram(C),r.uniform1f(k.uAspect,S),r.uniform2f(k.uGlowC,A(td.x,-1.5,1.5),A(td.y,-1.5,1.5)),r.uniform1f(k.uGlowR,n?.75:.95),r.uniform1f(k.uGlowI,w(b.glow,R.glow,V)*ti),r.bindVertexArray(U),r.drawArrays(r.TRIANGLE_STRIP,0,4),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE),r.useProgram(E),r.uniformMatrix4fv(D.uProj,!1,tu),r.uniformMatrix4fv(D.uView,!1,tf),r.uniformMatrix3fv(D.uRot,!1,to),r.uniform3f(D.uCenter,j[0],j[1],j[2]),r.uniform1f(D.uMorph,V),r.uniform1f(D.uScatter,u?0:b.scatter),r.uniform1f(D.uTime,tn),r.uniform1f(D.uSizeK,th/(2*B)),r.uniform1f(D.uCamZ,tl),r.uniform1f(D.uFocus,K),r.uniform1f(D.uGain,w(b.gain,R.gain,V)),r.uniform1f(D.uFade,ti),r.uniform3f(D.uPointer,ta+$.x*B*S*K,tr+$.y*B*K,j[2]),r.uniform1f(D.uPointerR,.085*K),r.uniform1f(D.uPointerStr,u?0:$.str*N),r.bindVertexArray(H),r.drawArrays(r.POINTS,0,F);let tM=[w(g.star[0],T.star[0],V),w(g.star[1],T.star[1],V),w(g.star[2],T.star[2],V)],tm=[to[0]*tM[0]+to[3]*tM[1]+to[6]*tM[2],to[1]*tM[0]+to[4]*tM[1]+to[7]*tM[2],to[2]*tM[0]+to[5]*tM[1]+to[8]*tM[2]],tp=ts([tm[0]+j[0],tm[1]+j[1],tm[2]+j[2]]),tv=1-.55*Math.sin(Math.PI*V),tx=u?1:1+.06*Math.sin(1.05*tn),tA=w(b.starI,R.starI,V)*tv*ti*(.92+(tx-1));if(tp.z>.3&&tA>.01){let t=w(b.starPx,R.starPx,V)*tx*tt;r.blendFunc(r.SRC_ALPHA,r.ONE),r.useProgram(z),r.uniform2f(G.uPos,tp.x,tp.y),r.uniform2f(G.uSize,t/tc*2,t/th*2),r.uniform1f(G.uI,tA),r.bindVertexArray(U),r.drawArrays(r.TRIANGLE_STRIP,0,4)}r.bindVertexArray(null)},tc=t=>{if(!ta)return;let e=Math.min((t-tl)/1e3,.05);tl=t,tf(e),tr=requestAnimationFrame(tc)},th=()=>{ta=!1,cancelAnimationFrame(tr)};return tu(),{setProgress(t){X=t,u&&tf(0)},setPointer(t,e,o){$.tx=t,$.ty=e,$.tstr=+!!o},resize:tu,start:()=>{ta||u||(ta=!0,tl=performance.now(),tr=requestAnimationFrame(tc))},stop:th,destroy(){th(),r.getExtension("WEBGL_lose_context")?.loseContext()}}}],28105)}]);