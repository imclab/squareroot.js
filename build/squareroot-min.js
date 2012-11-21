/*

Squareroot.js
A micro 3d engine for Canvas and CSS

Version 1
Build 15 | Tue Nov 20 17:15:02 2012

*/
var SQR=function(){if(typeof window.Float32Array=="undefined")window.Float32Array=window.Array;return{twoPI:Math.PI*2,deg2rad:Math.PI/180,rad2deg:180/Math.PI,supportsCss3d:!0,usePreserve3d:!0}}();SQR.BUILD=15;SQR.Color=function(a,c,b,d){this.applyLight=function(e){return SQR.Color.hsl(a,c,b-60+80*e,d)};this.toHSLString=function(){return SQR.Color.hsl(a,c,b,d)}};SQR.Color.hsl=function(a,c,b,d){return d?"hsla("+a+","+c+"%,"+b+"%, "+d+")":"hsl("+a+","+c+"%,"+b+"%)"};SQR.Matrix2D=function(){typeof Float32Array=="undefined"&&(Float32Array=Array);this.data=new Float32Array(9);var a,c,b,d,e;this.identity=function(){b=this.data;b[0]=1;b[1]=0;b[2]=0;b[3]=0;b[4]=1;b[5]=0;b[6]=0;b[7]=0;b[8]=1;return this};this.transformVector=function(a){b=this.data;d=a.x;e=a.y;a.x=b[0]*d+b[1]*e+b[2];a.y=b[3]*d+b[4]*e+b[5];return a};this.setTranslation=function(a,c,d){b=d||this.data;b[0]=1;b[1]=0;b[2]=a;b[3]=0;b[4]=1;b[5]=c;b[6]=0;b[7]=0;b[8]=1;return this};this.getTranslation=function(a){b=
this.data;a=a||new SQR.V2;a.x=b[2];a.y=b[5];return a};this.setScale=function(a,c,d){b=d||this.data;b[0]=a;b[1]=0;b[2]=0;b[3]=0;b[4]=c;b[5]=0;b[6]=0;b[7]=0;b[8]=1;return this};this.setShear=function(a,c,d){b=d||this.data;b[0]=1;b[1]=a;b[2]=0;b[3]=c;b[4]=1;b[5]=0;b[6]=0;b[7]=0;b[8]=1;return this};this.setRotation=function(a,c){b=c||this.data;var d=Math.cos(a),g=Math.sin(a);b[0]=d;b[1]=-g;b[2]=0;b[3]=g;b[4]=d;b[5]=0;b[6]=0;b[7]=0;b[8]=1;return this};this.setTRS=function(a,c,d,g,e){b=this.data;var h=
Math.cos(d);d=Math.sin(d);b[0]=h*g;b[1]=-d*e;b[2]=a;b[3]=d*g;b[4]=h*e;b[5]=c;b[6]=0;b[7]=0;b[8]=1;return this};this.translate=function(a,c){this.setTranslation(a,c,SQR.Matrix2D.__temp);return this.multiply(SQR.Matrix2D.__temp)};this.rotate=function(a){this.setRotation(a,SQR.Matrix2D.__temp);return this.multiply(SQR.Matrix2D.__temp)};this.scale=function(a,c){this.setScale(a,c,SQR.Matrix2D.__temp);return this.multiply(SQR.Matrix2D.__temp)};this.shear=function(a,c){this.setRotation(a,c,SQR.Matrix2D.__temp);
return this.multiply(SQR.Matrix2D.__temp)};var f,g,h,i,l,m,k,j,n,o,p,s,t,u,v;this.multiply=function(b){a=this.data;c=b.data||b;f=a[0];g=a[1];h=a[2];i=a[3];l=a[4];m=a[5];k=c[0];j=c[1];n=c[2];o=c[3];p=c[4];s=c[5];t=c[6];u=c[7];v=c[8];a[0]=f*k+g*o+h*t;a[1]=f*j+g*p+h*u;a[2]=f*n+g*s+h*v;a[3]=i*k+l*o+m*t;a[4]=i*j+l*p+m*u;a[5]=i*n+l*s+m*v;return this};this.copyTo=function(b){a=this.data;c=b.data||b;c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[8]=a[8];return b};this.copyFrom=
function(b){a=b.data||b;c=this.data;c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[8]=a[8];return this};var r=function(a){return Math.abs(a)<1.0E-6?0:a};this.getAsCSSProperty=function(a){var c=this.data;return a?"matrix3d("+r(c[0])+","+r(c[3])+",0,0,"+r(c[1])+","+r(c[4])+",0,0,0,0,1,0,"+r(c[2])+","+r(c[5])+",0,1)":"matrix("+r(c[0])+","+r(c[3])+","+r(c[1])+","+r(c[4])+","+r(c[2])+","+r(c[5])+")"};this.identity()};SQR.Matrix33=function(){this.data=new Float32Array(9);this.identity=function(){var a=this.data;a[0]=1;a[3]=0;a[6]=0;a[1]=0;a[4]=1;a[7]=0;a[2]=0;a[5]=0;a[8]=1;return this};this.transformVector=function(a,c){var b=this.data,d=a.x,e=a.y,f=a.z;c=c||a;c.x=b[0]*d+b[3]*e+b[6]*f;c.y=b[1]*d+b[4]*e+b[7]*f;c.z=b[2]*d+b[5]*e+b[8]*f;return c};this.determinant=function(){var a=this.data;return a[0]*(a[4]*a[8]-a[7]*a[5])+a[3]*(a[7]*a[2]-a[1]*a[8])+a[6]*(a[1]*a[5]-a[4]*a[2])};this.inverse=function(a){var c=this.data;
a=a||this.data;var b=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],i=c[6],l=c[7],m=c[8],k=m*g-h*l,j=-m*f+h*i,n=l*f-g*i;c=b*k+d*j+e*n;if(!c)return console.warn("Attempt to inverse a singular matrix44. ",this.data),a;c=1/c;a[0]=k*c;a[1]=(-m*d+e*l)*c;a[2]=(h*d-e*g)*c;a[3]=j*c;a[4]=(m*b-e*i)*c;a[5]=(-h*b+e*f)*c;a[6]=n*c;a[7]=(-l*b+d*i)*c;a[8]=(g*b-d*f)*c;return a};this.transpose=function(){var a=this.data,c=a[3],b=a[6],d=a[1],e=a[4],f=a[7],g=a[2],h=a[5],i=a[8];a[0]=a[0];a[1]=c;a[2]=b;a[3]=d;a[4]=e;a[5]=f;a[6]=
g;a[7]=h;a[8]=i}};SQR.Matrix44=function(){this.data=new Float32Array(16);this.identity=function(a){a=a||this.data;a[0]=1;a[4]=0;a[8]=0;a[12]=0;a[1]=0;a[5]=1;a[9]=0;a[13]=0;a[2]=0;a[6]=0;a[10]=1;a[14]=0;a[3]=0;a[7]=0;a[11]=0;a[15]=1};this.transformVector=function(a,b){var d=this.data,e=a.x,f=a.y,g=a.z,h=a.w;b=b||a;b.x=d[0]*e+d[4]*f+d[8]*g+d[12]*h;b.y=d[1]*e+d[5]*f+d[9]*g+d[13]*h;b.z=d[2]*e+d[6]*f+d[10]*g+d[14]*h;return b};this.multiply=function(a){var b=this.data,d=a.data||a,e,f,g,h,i,l,m,k,j,n,o,p,s,t,u,v,r,w,x,y,
z,A,B,C,D,q,E,F,G,H;a=b[0];e=b[1];f=b[2];g=b[3];h=b[4];i=b[5];l=b[6];m=b[7];k=b[8];j=b[9];n=b[10];o=b[11];p=b[12];s=b[13];t=b[14];u=b[15];v=d[0];r=d[1];w=d[2];x=d[3];y=d[4];z=d[5];A=d[6];B=d[7];C=d[8];D=d[9];q=d[10];E=d[11];F=d[12];G=d[13];H=d[14];d=d[15];b[0]=a*v+h*r+k*w+p*x;b[1]=e*v+i*r+j*w+s*x;b[2]=f*v+l*r+n*w+t*x;b[3]=g*v+m*r+o*w+u*x;b[4]=a*y+h*z+k*A+p*B;b[5]=e*y+i*z+j*A+s*B;b[6]=f*y+l*z+n*A+t*B;b[7]=g*y+m*z+o*A+u*B;b[8]=a*C+h*D+k*q+p*E;b[9]=e*C+i*D+j*q+s*E;b[10]=f*C+l*D+n*q+t*E;b[11]=g*C+m*D+
o*q+u*E;b[12]=a*F+h*G+k*H+p*d;b[13]=e*F+i*G+j*H+s*d;b[14]=f*F+l*G+n*H+t*d;b[15]=g*F+m*G+o*H+u*d;return this};this.setTQS=function(a,b,d,e,f,g,h,i,l,m,k){var j=k||this.data;this.identity(k);var n=f*f,o=g*g,p=h*h;j[0]=(1-2*o-2*p)*i;j[1]=(2*f*g-2*h*e)*i;j[2]=(2*f*h+2*g*e)*i;j[4]=(2*f*g+2*h*e)*l;j[5]=(1-2*n-2*p)*l;j[6]=(2*g*h-2*f*e)*l;j[8]=(2*f*h-2*g*e)*m;j[9]=(2*g*h+2*f*e)*m;j[10]=(1-2*n-2*o)*m;j[12]=a;j[13]=b;j[14]=d;return k||this};this.setTRS=function(a,b,d,e,f,g,h,i,l,m){var k=m||this.data;this.identity(m);
var j=Math.sin(e);e=Math.cos(e);var n=Math.sin(f);f=Math.cos(f);var o=Math.sin(g);g=Math.cos(g);k[0]=(f*g+n*j*o)*h;k[1]=(-f*o+n*j*g)*h;k[2]=n*e*h;k[4]=o*e*i;k[5]=g*e*i;k[6]=-j*i;k[8]=(-n*g+f*j*o)*l;k[9]=(o*n+f*j*g)*l;k[10]=f*e*l;k[12]=a;k[13]=b;k[14]=d;return m||this};this.setScale=function(a,b,d,e){var f=e||this.data;this.identity(e);f[0]=a;f[5]=b;f[10]=d;return e||this};this.setTranslation=function(a,b,d,e){var f=e||this.data;this.identity(e);f[12]=a;f[13]=b;f[14]=d;return e||this};this.setRotation=
function(a,b,d,e){var f=e||this.data;this.identity(e);var g=Math.sin(a);a=Math.cos(a);var h=Math.sin(b);b=Math.cos(b);var i=Math.sin(d);d=Math.cos(d);f[0]=b*d+h*g*i;f[1]=-b*i+h*g*d;f[2]=h*a;f[4]=i*a;f[5]=d*a;f[6]=-g;f[8]=-h*d+b*g*i;f[9]=i*h+b*g*d;f[10]=b*a;return e||this};this.translate=function(a,b,d){this.setTranslation(a,b,d,SQR.Matrix44.__temp);return this.multiply(SQR.Matrix44.__temp)};this.rotate=function(a,b,d){this.setRotation(a,b,d,SQR.Matrix44.__temp);return this.multiply(SQR.Matrix44.__temp)};
this.scale=function(a,b,d){this.setScale(a,b,d,SQR.Matrix44.__temp);return this.multiply(SQR.Matrix44.__temp)};this.copyTo=function(a){for(var b=this.data,d=a.data||a,e=0;e<16;e++)d[e]=b[e];return a};this.copyRotationTo=function(a){var b=this.data,d=a.data||a;d[0]=b[0];d[1]=b[1];d[2]=b[2];d[3]=b[4];d[4]=b[5];d[5]=b[6];d[6]=b[8];d[7]=b[9];d[8]=b[10];return a};var a=function(a){return Math.abs(a)<1.0E-6?0:a};this.getAsCSSProperty=function(){var c=this.data;return"matrix3d("+a(c[0])+","+a(c[1])+","+
a(c[2])+","+a(c[3])+","+a(c[4])+","+a(c[5])+","+a(c[6])+","+a(c[7])+","+a(c[8])+","+a(c[9])+","+a(c[10])+","+a(c[11])+","+a(c[12])+","+a(c[13])+","+a(c[14])+","+a(c[15])+")"};this.extractPosition=function(a){var b=this.data;a.set(b[12],b[13],b[14]);return a};this.determinant=function(){var a=this.data;return a[0]*(a[5]*a[10]-a[9]*a[6])+a[4]*(a[9]*a[2]-a[1]*a[10])+a[8]*(a[1]*a[6]-a[5]*a[2])};this.inverse=function(a){var b=this.data,d=a?a.data||a:this.data,e=this.determinant();if(Math.abs(e)<1.0E-4)return console.warn("Attempt to inverse a singular matrix44. ",
this.data),console.trace(),a;var f=b[0],g=b[4],h=b[8],i=b[12],l=b[1],m=b[5],k=b[9],j=b[13],n=b[2],o=b[6],p=b[10];b=b[14];e=1/e;d[0]=(m*p-k*o)*e;d[4]=(h*o-g*p)*e;d[8]=(g*k-h*m)*e;d[1]=(k*n-l*p)*e;d[5]=(f*p-h*n)*e;d[9]=(h*l-f*k)*e;d[2]=(l*o-m*n)*e;d[6]=(g*n-f*o)*e;d[10]=(f*m-g*l)*e;d[12]=-(i*d[0]+j*d[1]+b*d[2]);d[13]=-(i*d[4]+j*d[5]+b*d[6]);d[14]=-(i*d[8]+j*d[9]+b*d[10]);return a};this.transpose=function(){var a=this.data,b=a[4],d=a[8],e=a[1],f=a[5],g=a[9],h=a[2],i=a[6],l=a[10];a[0]=a[0];a[1]=b;a[2]=
d;a[4]=e;a[5]=f;a[6]=g;a[8]=h;a[9]=i;a[10]=l};this.lookAt=function(a,b){var d=this.data,e=SQR.Matrix44.__tv1,f=SQR.Matrix44.__tv2,g=SQR.Matrix44.__tv3;g.set(d[12],d[13],d[14]);g.sub(g,a).norm();if(g.magsq()===0)g.z=1;e.cross(b,g).norm();e.magsq()===0&&(g.x+=1.0E-4,e.cross(b,g).norm());f.cross(g,e);d[0]=e.x;d[4]=f.x;d[8]=g.x;d[1]=e.y;d[5]=f.y;d[9]=g.y;d[2]=e.z;d[6]=f.z;d[10]=g.z;return this};this.identity()};SQR.ProjectionMatrix=function(){typeof Float32Array=="undefined"&&(Float32Array=Array);this.data=new Float32Array(16);this.copyTo=function(a){for(var c=this.data,b=a.data||a,d=0;d<16;d++)b[d]=c[d];return a};this.identity()};SQR.ProjectionMatrix.prototype.identity=function(){var a=this.data;a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1};
SQR.ProjectionMatrix.prototype.perspective=function(a,c,b,d){var e=this.data;a=b*Math.tan(a*Math.PI/360);var f=d-b;e[0]=b/(a*c);e[4]=0;e[8]=0;e[12]=0;e[1]=0;e[5]=b/a;e[9]=0;e[13]=0;e[2]=0;e[6]=0;e[10]=-(d+b)/f;e[14]=-(2*d*b)/f;e[3]=0;e[7]=0;e[11]=-1;e[15]=0};SQR.ProjectionMatrix.prototype.transformVector=function(a,c){var b=a.x,d=a.y,e=a.z,f=a.w,g=this.data;c=c||a;c.x=g[0]*b+g[4]*d+g[8]*e+g[12]*f;c.y=g[1]*b+g[5]*d+g[9]*e+g[13]*f;c.z=g[2]*b+g[6]*d+g[10]*e+g[14]*f;return c};
SQR.ProjectionMatrix.prototype.inverse=function(a){var c=this.data;a=a||this.data;var b=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],i=c[6],l=c[7],m=c[8],k=c[9],j=c[10],n=c[11],o=c[12],p=c[13],s=c[14];c=c[15];var t=b*h-d*g,u=b*i-e*g,v=b*l-f*g,r=d*i-e*h,w=d*l-f*h,x=e*l-f*i,y=m*p-k*o,z=m*s-j*o,A=m*c-n*o,B=k*s-j*p,C=k*c-n*p,D=j*c-n*s,q=t*D-u*C+v*B+r*A-w*z+x*y;if(!q)return null;q=1/q;a[0]=(h*D-i*C+l*B)*q;a[1]=(-d*D+e*C-f*B)*q;a[2]=(p*x-s*w+c*r)*q;a[3]=(-k*x+j*w-n*r)*q;a[4]=(-g*D+i*A-l*z)*q;a[5]=(b*D-e*A+f*
z)*q;a[6]=(-o*x+s*v-c*u)*q;a[7]=(m*x-j*v+n*u)*q;a[8]=(g*C-h*A+l*y)*q;a[9]=(-b*C+d*A-f*y)*q;a[10]=(o*w-p*v+c*t)*q;a[11]=(-m*w+k*v-n*t)*q;a[12]=(-g*B+h*z-i*y)*q;a[13]=(b*B-d*z+e*y)*q;a[14]=(-o*r+p*u-s*t)*q;a[15]=(m*r-k*u+j*t)*q;return a};SQR.Quaternion=function(a,c,b,d){this.set(a,c,b,d)};SQR.Quaternion.prototype.set=function(a,c,b,d){this.w=a||1;this.x=c||0;this.y=b||0;this.z=d||0};SQR.Quaternion.prototype.copyFrom=function(a){this.w=a.w;this.x=a.x;this.y=a.y;this.z=a.z};SQR.Quaternion.prototype.identity=function(){this.set()};SQR.Quaternion.prototype.mul=function(a,c){c=c||this;c.set(c.w*a.w-c.x*a.x-c.y*a.y-c.z*a.z,c.w*a.x+c.x*a.w+c.y*a.z-c.z*a.y,c.w*a.y-c.x*a.z+c.y*a.w+c.z*a.x,c.w*a.z+c.x*a.y-c.y*a.x+c.z*a.w);c.normalize();return c};
SQR.Quaternion.prototype.lookAt=function(a,c){var b=SQR.Quaternion.__tv1,d=SQR.Quaternion.__tv2,e=SQR.Quaternion.__tv3;a.copyTo(b);c.copyTo(e);b.norm();if(b.z==-1)b.x=1.0E-4,b.norm();d.cross(e,b);e.cross(b,d);this.w=Math.sqrt(1+d.x+e.y+b.z)*0.5;var f=4*this.w;this.x=(b.y-e.z)/f;this.y=(d.z-b.x)/f;this.z=(e.x-d.y)/f;this.normalize();return this};SQR.Quaternion.prototype.fromAngleAxis=function(a,c,b,d){var e=Math.sin(a/2);this.x=c*e;this.y=b*e;this.z=d*e;this.w=Math.cos(a/2)};
SQR.Quaternion.prototype.mag=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)};SQR.Quaternion.prototype.normalize=function(){var a=this.mag();this.x/=a;this.y/=a;this.z/=a;this.w/=a};SQR.Quaternion.prototype.toMatrix=function(){};
SQR.Quaternion.slerp=function(a,c,b,d){d=d||new SQR.Quaternion;var e=a.w*c.w+a.x*c.x+a.y*c.y+a.z*c.z,f=Math.acos(e),g=Math.sqrt(1-e*e),h=Math.sin((1-b)*f)/g;b=Math.sin(b*f)/g;Math.abs(e)>=1?(h=1,b=0):Math.abs(g)<0.0010&&(b=h=0.5);d.w=a.w*h+c.w*b;d.x=a.x*h+c.x*b;d.y=a.y*h+c.y*b;d.z=a.z*h+c.z*b;return d};SQR.V2=function(a,c){this.x=a||0;this.y=c||0};SQR.V2.prototype.set=function(a,c){this.x=a||0;this.y=c||0;return this};SQR.V2.prototype.add=function(a,c){this.x=a.x+c.x;this.y=a.y+c.y;return this};SQR.V2.prototype.mul=function(a){this.x*=a;this.y*=a;return this};SQR.V2.prototype.magsq=function(){return this.x*this.x+this.y*this.y};SQR.V2.prototype.mag=function(){return Math.sqrt(this.magsq())};SQR.V2.prototype.norm=function(){var a=this.mag();if(a==0)return this;this.x/=a;this.y/=a;return this};
SQR.V2.prototype.sub=function(a,c){c=c||new SQR.V2;c.x=a.x-this.x;c.y=a.y-this.y;return c};SQR.V2.prototype.isZero=function(){return this.x==0&&this.y==0};SQR.V2.random=function(){return new SQR.V2(Math.random()*2-1,Math.random()*2-1)};SQR.V2.prototype.setAngleRadius=function(a,c){this.x=Math.cos(a)*c;this.y=Math.sin(a)*c;return this};SQR.V2.prototype.addc=function(a,c){this.x+=a;this.y+=c;return this};SQR.V2.prototype.addAngleRadius=function(a,c){this.x+=Math.cos(a)*c;this.y+=Math.sin(a)*c;return this};SQR.V3=function(a,c,b,d){this.x=a||0;this.y=c||0;this.z=b||0;this.w=d||1};SQR.V3.prototype.set=function(a,c,b,d){this.x=a||0;this.y=c||0;this.z=b||0;this.w=d||1;return this};SQR.V3.prototype.append=function(a,c,b,d){this.x+=a||0;this.y+=c||0;this.z+=b||0;this.w+=d||0;return this};SQR.V3.prototype.copyTo=function(a){a.x=this.x;a.y=this.y;a.z=this.z;a.w=this.w;return a};SQR.V3.prototype.copy=function(a){a=a||new SQR.V3;a.set(this.x,this.y,this.z,this.w);return a};
SQR.V3.prototype.copyFrom=function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w;return this};SQR.V3.prototype.magsq=function(){return this.x*this.x+this.y*this.y+this.z*this.z};SQR.V3.prototype.mag=function(){return Math.sqrt(this.magsq())};SQR.V3.prototype.isZero=function(){return this.x==0&&this.y==0&&this.z==0};SQR.V3.prototype.mul=function(a){this.x*=a;this.y*=a;this.z*=a;return this};SQR.V3.prototype.neg=function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this};
SQR.V3.prototype.norm=function(){var a=1/this.mag();this.set(this.x*a,this.y*a,this.z*a);return this};SQR.V3.prototype.add=function(a,c){this.x=a.x+c.x;this.y=a.y+c.y;this.z=a.z+c.z;return this};SQR.V3.prototype.sub=function(a,c){this.x=a.x-c.x;this.y=a.y-c.y;this.z=a.z-c.z;return this};SQR.V3.dot=function(a,c){return a.x*c.x+a.y*c.y+a.z*c.z};SQR.V3.prototype.toUniform=function(){return[this.x,this.y,this.z]};
SQR.V3.prototype.cross=function(a,c){this.set(a.y*c.z-a.z*c.y,a.z*c.x-a.x*c.z,a.x*c.y-a.y*c.x,this.w);return this};SQR.V3.up=new SQR.V3(0,1,0);SQR.VectorUtil={mouseToUnitSphereVector:function(a,c,b,d){b=b||0.5;d=d||new SQR.V3;a/=b;c/=b;b=a*a+c*c;b>=1?d.set(a,c,0):d.set(a,c,Math.sqrt(1-b));d.norm();return d}};SQR.Quaternion.__tv1=new SQR.V3;SQR.Quaternion.__tv2=new SQR.V3;SQR.Quaternion.__tv3=new SQR.V3;SQR.Matrix2D.__temp=new Float32Array(9);SQR.Matrix33.__temp=new Float32Array(9);SQR.Matrix44.__temp=new Float32Array(16);SQR.Matrix44.__tv1=new SQR.V3;SQR.Matrix44.__tv2=new SQR.V3;SQR.Matrix44.__tv3=new SQR.V3;SQR.VectorUtil.__tv1=new SQR.V3;
SQR.VectorUtil.__tv2=new SQR.V3;SQR.VectorUtil.__tv3=new SQR.V3;SQR.Geometry=function(){this.normals=this.particleTextures=this.colors=this.triangles=this.vertices=null};SQR.Geometry.prototype.addTriangle=function(a,c,b,d){if(!this.triangles)this.triangles=[];this.triangles.push(new SQR.Triangle(a,c,b,d))};SQR.Geometry.prototype.addSegment=function(a,c,b){if(!this.vertices)this.vertices=[];if(!this.colors)this.colors=[];this.vertices.push(a,c);this.colors.push(b)};SQR.Squareroot=function(a,c){var b={};if(a)b.context=a.getContext("2d");b.projection=new SQR.ProjectionMatrix;b.container=c;b.lightDirection=(new SQR.V3(0,1,0.1)).norm();var d=null;this.setBackground=function(b){if(a)a.style.backgroundColor=b};this.setClearColor=function(a){d=a};this.setProjection=function(a){b.cssDistance=0.5/Math.tan(a*Math.PI/360)*b.height;b.projection.perspective(a,b.width/b.height,0.1,1E3);if(c)c.style.perspective=b.cssDistance+"px",c.style["-webkit-perspective"]=b.cssDistance+
"px",c.style["-moz-perspective"]=b.cssDistance+"px",c.style["-o-perspective"]=b.cssDistance+"px"};this.setPerspectiveOrigin=function(a,b){c&&(c.style["perspective-origin"]=a+"px "+b+"px",c.style["-webkit-perspective-origin"]=a+"px "+b+"px",c.style["-moz-perspective-origin"]=a+"px "+b+"px",c.style["-o-perspective-origin"]=a+"px "+b+"px")};this.cssDistance=function(){return b.cssDistance};this.setSize=function(c,d){b.width=c;b.height=d;if(a)a.width=c,a.height=d;b.aspect=c/d;b.centerX=c*0.5;b.centerY=
d*0.5};this.children=[];this.numChildren=0;var e=[];this.add=function(){for(var a=0;a<arguments.length;a++){var b=arguments[a];b.parent=null;this.children.indexOf(b)==-1&&this.children.push(b)}this.numChildren=this.children.length};this.remove=function(){for(var a=0;a<arguments.length;a++){var b=arguments[a],c=this.children.indexOf(b);if(c==-1)return!1;b.parent=null;b.renderer&&(b.renderer.isDom2d||b.renderer.isDom3d)&&b.removeFromDom();this.children.splice(c,1)}this.numChildren=this.children.length};
this.contains=function(a){return this.children.indexOf(a)>-1};this.removeAll=function(){for(var a=0;a<this.numChildren;a++){var b=this.children[a];b.parent=null;b.renderer&&(b.renderer.isDom2d||b.renderer.isDom3d)&&b.removeFromDom()}this.children=[];this.numChildren=this.children.length};var f=function(a){a.renderer&&(a.renderer.isDom3d&&SQR.usePreserve3d&&a.parent&&a.parent.renderer&&a.parent.renderer.isDom3d?a.renderer.appendToDom(a.parent.renderer.element):(a.renderer.isDom2d||a.renderer.isDom3d)&&
a.renderer.appendToDom(c));a.transformWorld();e.push(a);if(a.numChildren>0)for(var b=0;b<a.numChildren;b++)f(a.children[b])};this.render=function(c){SQR.Time.tick();e.length=0;if(b.context)b.context.setTransform(1,0,0,1,0,0),d!=null?(b.context.fillStyle=d,b.context.fillRect(0,0,a.width,a.height)):b.context.clearRect(0,0,a.width,a.height);for(var h=0;h<this.numChildren;h++)f(this.children[h]);var i=e.length;b.camera=c;b.viewMatrix=c.computeInverseMatrix();for(h=0;h<i;h++)c=e[h],c.transformView(b.viewMatrix);
e.sort(function(a,b){var c=a.depth(),d=b.depth();if(c<d)return-1;if(c>d)return 1;return 0});for(h=0;h<i;h++)if(c=e[h],c.renderer)b.depth=h,c.renderer.draw(c,b)}};SQR.Transform=function(a){this.name=a;this.cssPreserve3dMode=this.useQuaternion=this.directMatrixMode=!1;this.engine=this.parent=this.geometry=this.renderer=null;this.position=new SQR.V3;this.rotation=new SQR.V3;this.rotationQ=new SQR.Quaternion;this.scale=new SQR.V3(1,1,1);var c=new SQR.V3;this.matrix=new SQR.Matrix44;this.globalMatrix=new SQR.Matrix44;this.inverseWorldMatrix=new SQR.Matrix44;this.depth=function(){return this.globalMatrix.data[14]};this.children=[];this.numChildren=0;this.add=function(){for(var a=
0;a<arguments.length;a++){var c=arguments[a];c.parent=this;this.children.indexOf(c)==-1&&this.children.push(c)}this.numChildren=this.children.length};this.remove=function(){for(var a=0;a<arguments.length;a++){var c=arguments[a],e=this.children.indexOf(c);if(e==-1)return!1;c.parent=null;c.renderer&&(c.renderer.isDom2d||c.renderer.isDom3d)&&c.removeFromDom();this.children.splice(e,1)}this.numChildren=this.children.length};this.contains=function(a){return this.children.indexOf(a)>-1};this.removeAll=
function(){for(var a=0;a<this.numChildren;a++){var c=this.children[a];c.parent=null;c.renderer&&(c.renderer.isDom2d||c.renderer.isDom3d)&&c.removeFromDom()}this.children=[];this.numChildren=this.children.length};this.transformWorld=function(){this.cssPreserve3dMode=SQR.usePreserve3d&&this.renderer&&this.renderer.isDom3d&&this.parent&&this.parent.renderer&&this.parent.renderer.isDom3d;if(!this.directMatrixMode){var a=this.position,c=this.rotationQ,e=this.rotation,f=this.scale;this.useQuaternion?this.matrix.setTQS(a.x,
a.y,a.z,c.w,c.x,c.y,c.z,f.x,f.y,f.z):this.matrix.setTRS(a.x,a.y,a.z,e.x,e.y,e.z,f.x,f.y,f.z)}this.lookDirection&&this.matrix.lookAt(this.lookDirection,SQR.V3.up);this.parent&&!this.cssPreserve3dMode?(this.parent.globalMatrix.copyTo(this.globalMatrix),this.globalMatrix.multiply(this.matrix)):this.matrix.copyTo(this.globalMatrix);this.lookTarget&&this.globalMatrix.lookAt(this.lookTarget.globalPosition(),SQR.V3.up)};this.globalPosition=function(){this.globalMatrix.extractPosition(c);return c};this.transformView=
function(a){this.cssPreserve3dMode||(this.globalMatrix.copyTo(this.matrix),a.copyTo(this.globalMatrix),this.globalMatrix.multiply(this.matrix))};this.lookAt=function(a){this.lookTarget=a};this.lookInDirection=function(a){this.lookDirection=a};this.computeInverseMatrix=function(){this.globalMatrix.copyTo(this.inverseWorldMatrix);this.inverseWorldMatrix.transpose();this.inverseWorldMatrix.inverse();return this.inverseWorldMatrix}};SQR.Particle2D=function(a){this.transform=new SQR.Matrix2D;this.texture=a;this.width=a.width;this.height=a.height;this.position=new SQR.V2(0,0);this.rotation=0;this.scale=new SQR.V2(1,1)};SQR.Particle2D.prototype={render:function(a){var c=this.position,b=this.scale;this.transform.setTRS(c.x,c.y,this.rotation,b.x,b.y);c=this.transform.data;a.setTransform(c[0],c[1],c[3],c[4],c[2],c[5]);a.drawImage(this.texture,this.width*-0.5,this.height*-0.5)}};SQR.Plane=function(a,c,b,d,e,f,g){this.triangles=[];b=b||1;d=d||1;a*=0.5;c*=0.5;e=-a+(e||0);f=-c+(f||0);var h=a*2/b,i=c*2/d,l,m;for(l=0;l<b;l++)for(m=0;m<d;m++){var k=e+l*h,j=k+h,n=f+m*i,o=n+i,p;g?(p=new SQR.V3(k,0,n),n=new SQR.V3(j,0,n),j=new SQR.V3(j,0,o),k=new SQR.V3(k,0,o)):(p=new SQR.V3(k,n,0),n=new SQR.V3(j,n,0),j=new SQR.V3(j,o,0),k=new SQR.V3(k,o,0));o=new SQR.Color(0,100,70);this.triangles.push(new SQR.Triangle(p,n,j,o));this.triangles.push(new SQR.Triangle(p,j,k,o))}this.applyHeightMap=
function(b,d,e,f){for(var g=this.triangles.length,h=function(g){var h=(g.z/c+1)/2,i=(g.x/a+1)/2;h=(e+h*f)%1;h=SQR.CanvasUtil.getPixelNormRed(b,i,h)/255*d;g.y=d-h},i=0;i<g;i++){var j=this.triangles[i];h(j.a);h(j.b);h(j.c)}}};SQR.Triangle=function(a,c,b,d){var e=this;this.a=a;this.b=c;this.c=b;this.color=d;this.sa=new SQR.V3;this.sb=new SQR.V3;this.sc=new SQR.V3;this.normal=new SQR.V3;this.center=new SQR.V3;this.depth=0;this.update=function(a,b,c){this.a.copyTo(this.sa);this.b.copyTo(this.sb);this.c.copyTo(this.sc);a.transformVector(this.sa);a.transformVector(this.sb);a.transformVector(this.sc);this.center.set(0,0,0).add(this.sa,this.sb).add(this.center,this.sc).mul(1/3);this.depth=this.center.z;this.sa.x=this.sa.x/this.sa.z*
b+b;this.sa.y=this.sa.y/this.sa.z*c+c;this.sb.x=this.sb.x/this.sb.z*b+b;this.sb.y=this.sb.y/this.sb.z*c+c;this.sc.x=this.sc.x/this.sc.z*b+b;this.sc.y=this.sc.y/this.sc.z*c+c;a=SQR.VectorUtil.__tv1;b=SQR.VectorUtil.__tv2;a.sub(e.sa,e.sb);b.sub(e.sa,e.sc);e.normal.cross(a,b).norm()}};SQR.DOMElement2D=function(a){this.isDom2d=!0;this.element=a;var c=!1,b=null,d=new SQR.Matrix2D,e=new SQR.Matrix44;this.appendToDom=function(a){c&&a==b||(b=a,b.appendChild(this.element),c=!0)};this.removeFromDom=function(){b.removeChild(this.element)};this.draw=function(b,c){c.projection.copyTo(e);e.multiply(b.globalMatrix);var h=new SQR.V3(0,0,0);e.transformVector(h);h.x=h.x/h.z*c.centerX;h.y=h.y/h.z*c.centerY;var i=1/(h.z/c.cssDistance);d.setTRS(h.x,h.y,b.rotation.z,i,i);i=(SQR.supportsCss3d?SQR.DOMUtil.translate3dCss(0,
0,0):"")+d.getAsCSSProperty(!1);a.style.zIndex=c.depth;a.style.transform=i;a.style["-webkit-transform"]=i;a.style["-moz-transform"]=i;a.style["-o-transform"]=i;a.style["-ms-transform"]=i;a.style.display=h.z<=0?"none":"block"}};SQR.DOMElement3D=function(a){this.isDom3d=!0;this.element=a;var c=!1,b=null;this.setBackfaceVisibility=function(b){b=b?"visible":"hidden";a.style["backface-visibility"]=b;a.style["-webkit-backface-visibility"]=b;a.style["-moz-backface-visibility"]=b;a.style["-ms-backface-visibility"]=b;a.style["-o-backface-visibility"]=b};this.appendToDom=function(a){c&&a==b||(b=a,b.appendChild(this.element),c=!0)};this.removeFromDom=function(){b.removeChild(this.element)};this.setBackfaceVisibility=function(){};
this.draw=function(b,c){var f=b.cssPreserve3dMode?"":SQR.DOMUtil.translate3dCss(0,0,c.cssDistance),g="perspective("+c.cssDistance+"px)";f=f+" "+b.globalMatrix.getAsCSSProperty();a.style.zIndex=c.depth;a.style.transform=g+f;a.style["-webkit-transform"]=f;a.style["-moz-transform"]=g+f;a.style["-ms-transform"]=g+f;a.style["-o-transform"]=g+f}};SQR.Particle=function(a){var c=new SQR.V3,b=new SQR.Matrix44;this.draw=function(d,e){var f=e.context,g=d.geometry;e.projection.copyTo(b);b.multiply(d.globalMatrix);for(var h=0;h<g.vertices.length;h++)if(g.vertices[h].copyTo(c),b.transformVector(c),!(c.z<0))c.x=c.x/c.z*e.centerX+e.centerX-a,c.y=c.y/c.z*e.centerY+e.centerY-a,f.drawImage(g.particleTextures[h],c.x,c.y)}};SQR.Polygon=function(){var a=new SQR.Matrix44;new SQR.V3;this.draw=function(c,b){var d=b.context,e=c.geometry;b.projection.copyTo(a);a.multiply(c.globalMatrix);var f,g,h=e.triangles.length;for(f=0;f<h;f++)g=e.triangles[f],g.update(a,b.centerX,b.centerY);e.triangles.sort(function(a,b){var c=a.depth,d=b.depth;if(c<d)return 1;if(c>d)return-1;return 0});for(f=0;f<h;f++){g=e.triangles[f];var i=Math.max(0,SQR.V3.dot(g.normal,b.lightDirection));i=g.color.applyLight(i);d.fillStyle=i;d.beginPath();d.moveTo(g.sa.x,
g.sa.y);d.lineTo(g.sb.x,g.sb.y);d.lineTo(g.sc.x,g.sc.y);d.closePath();d.fill()}}};SQR.Segment=function(a){this.culling=!1;var c=new SQR.V3,b=new SQR.V3,d=new SQR.Matrix44,e=new SQR.V3(0,0,1),f=new SQR.V3;this.draw=function(g,h){var i=h.context,l=g.geometry;h.projection.copyTo(d);d.multiply(g.globalMatrix);for(var m=0;m<l.vertices.length;m+=2)if(l.vertices[m].copyTo(c),l.vertices[m+1].copyTo(b),d.transformVector(c),d.transformVector(b),!(c.z<0||b.z<0))if(f.sub(c,b).norm(),!(SQR.V3.dot(f,e)<0&&this.culling))c.x=c.x/c.z*h.centerX+h.centerX,c.y=c.y/c.z*h.centerY+h.centerY,b.x=b.x/
b.z*h.centerX+h.centerX,b.y=b.y/b.z*h.centerY+h.centerY,i.strokeStyle=l.colors[m/2|0],i.lineWidth=a,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(b.x,b.y),i.stroke()}};SQR.CanvasUtil={getPixel:function(a,c,b){c=(b*a.width+c)*4;return[a.data[c+0],a.data[c+1],a.data[c+2],a.data[c+3]]},getPixelRed:function(a,c,b){return a.data[(b*a.width+c)*4]},getPixelNormRed:function(a,c,b){return a.data[((b*(a.height-1)|0)*a.width+(c*(a.width-1)|0))*4]}};SQR.DOMUtil={isElement:function(a){return typeof HTMLElement==="object"?a instanceof HTMLElement:a&&typeof a==="object"&&a.nodeType===1&&typeof a.nodeName==="string"},translate3dCss:function(a,c,b){return" translate3d("+a+"px,"+c+"px,"+b+"px)"},translate2dCss:function(a,c){return" translate("+a+"px,"+c+"px)"},rotate3dCss:function(a,c,b){return" rotateX("+a+"deg) rotateY("+c+"deg) rotateZ("+b+"deg)"}};SQR.Stringify={v2:function(a){return a.x+" | "+a.y},v3:function(a){return a.x+" | "+a.y+" | "+a.z},q:function(a){return a.w+" || "+a.x+" | "+a.y+" | "+a.z},m33:function(a){a=a.data||a;return a[0]+"\t|\t"+a[1]+"\t|\t"+a[2]+"\n"+a[3]+"\t|\t"+a[4]+"\t|\t"+a[5]+"\n"+a[6]+"\t|\t"+a[7]+"\t|\t"+a[8]+"\n"},m44:function(a){var c=a.data||a;a=function(a){a=Math.abs(c[a])>1.0E-4?c[a]:0;return a=a.toPrecision(3)};return a(0)+"\t|\t"+a(4)+"\t|\t"+a(8)+"\t|\t"+a(12)+"\n"+a(1)+"\t|\t"+a(5)+"\t|\t"+a(9)+"\t|\t"+a(13)+
"\n"+a(2)+"\t|\t"+a(6)+"\t|\t"+a(10)+"\t|\t"+a(14)+"\n"+a(3)+"\t|\t"+a(7)+"\t|\t"+a(11)+"\t|\t"+a(15)+"\n"}};SQR.Time={};SQR.Time.time=0;SQR.Time.startTime=0;SQR.Time.timeOffset=0;SQR.Time.lastTime=0;SQR.Time.deltaTime=0;SQR.Time.tick=function(){var a=(new Date).getTime();if(SQR.Time.startTime==0)SQR.Time.startTime=a;if(SQR.Time.lastTime!=0)SQR.Time.deltaTime=a-SQR.Time.lastTime;SQR.Time.lastTime=a;SQR.Time.time=(a-SQR.Time.startTime)/1E3;SQR.Time.deltaTime/=1E3};SQR.Time.getTime=function(){SQR.Time.tick();return SQR.Time.deltaTime};SQR.Time.pause=function(){SQR.Time.timeOffset=(new Date).getTime()};
SQR.Time.resume=function(){SQR.Time.startTime+=(new Date).getTime()-SQR.Time.timeOffset;SQR.Time.lastTime=SQR.Time.deltaTime=0};SQR.Time.formatTime=function(a,c){if(!a)a=SQR.Time.time;var b=Math.floor(a%1*100),d=Math.floor(a)%60,e=Math.floor(a/60);b<10&&(b="0"+b);b==100&&(b="00");d<10&&(d="0"+d);e<10&&(e="0"+e);return c?e+":"+d+":"+b:e+":"+d};
