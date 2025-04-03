export const Back_Ground="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg";
export const Logo="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png";
export const User_Logo='https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };
export const IMG_URL='https://image.tmdb.org/t/p/w500';
export const Supported_languages=[{identifier:"eng",name:"English"},{identifier:"hin",name:"Hindi"},{identifier:"tel",name:"Telugu"}]
export const VITE_GENAI_API_KEY=process.env.REACT_APP_GENAI_KEY;
