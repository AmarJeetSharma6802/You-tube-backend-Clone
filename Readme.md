## app.use

- mostly use hota hain middleware app.use me aur confuration setting karni ho

`app.use(express.json({limit:"16kb"}))`

- server ko crash hone se bachane ke liye ek limit dete hain

`app.use(express.urlencoded({extended:true , limit:"16kb"}))`

- jab url me data jata hain to kisi me google.com /org+/ aur kisime % ka sign dal dete hain aur url ka apna ek encoder hain jo cheejo ko convert karta hain aur extended ka matlab object ke ander object de sakte hain

`app.use(express.static)`

- kai bar hum file ,pdf aur image ko store karna chate hain mere server jo ki public dekh sake

`app.use(cookieParser())`

- iska kaam itnasa hain ki me mere server se jo user ka browser hain na uske ander ki cooies ko acces kar panu aur uski cookie set bhi kar panu to uski cookies par curd opration kar panu aur kyoki kuch tarike hote hain janha se hum secure cookies user ke browser me rkh skte hain un secure cookies ko sirf server hi read kar sakta hain server hi usko remove kar sakta hain


`app.use(cors())`

- Cross-Origin Resource Sharing

- app.use cors ka option apne aap me ek object hain

- CORS ka full form hai Cross-Origin Resource Sharing. Yeh ek security feature hai jo web browsers enforce karte hain. Iska main kaam yeh ensure karna hota hai ki ek website doosri website se bina permission ke data nahi le sakti.

- Jab aap kisi web page se request karte ho (e.g., API call karte ho) jo ki same origin nahi hai (e.g., aapki website aur API dono alag domains ya ports par hain), toh browser us request ko by default block kar deta hai. Yeh block CORS policy ki wajah se hota hai.

- Same-origin: Origin ka matlab hota hai scheme (http/https), domain (example.com), aur port (e.g., :3000). Agar yeh teeno same hote hain, toh woh same-origin hota hai. Agar koi bhi cheez alag hoti hai, toh woh cross-origin ban jata hai.

## CORS ke options:

1. Allow-Origin: Yeh header specify karta hai ki kaunse origins se request ko allow kiya jaaye.

- Example: Access-Control-Allow-Origin: \* (sabhi origins allowed) ya Access-Control-Allow-Origin: https://specific-website.com (sirf ek specific origin allowed).

2. Allow-Methods: Yeh header specify karta hai ki kaunse HTTP methods (GET, POST, PUT, DELETE) allowed hain.

- Example: Access-Control-Allow-Methods: GET, POST

3. Allow-Headers: Yeh define karta hai ki kaunse headers allowed hain request me.

- Example: Access-Control-Allow-Headers: Content-Type, Authorization

4. Credentials: Agar aapko cookies ya authentication headers bhejne hain cross-origin request ke saath, toh Access-Control-Allow-Credentials: true use karna padta hai.

- ab aapko cross-origin requests me cookies ya sensitive data (like authentication tokens) bhejni hoti hai, toh aapko Access-Control-Allow-Credentials: true header lagana padta hai. Iska matlab yeh hota hai ki server bata raha hai, "Haan, main credentials (cookies, HTTP authentication) ko allow karta hoon is request ke saath."

## mkdir

- se multiple folder bana sakte hain

## gitkeep

- .gitkeep एक खाली फ़ाइल होती है जिसका उपयोग यह सुनिश्चित करने के लिए किया जाता है कि Git खाली फ़ोल्डरों को ट्रैक करे। डिफ़ॉल्ट रूप से, Git खाली फोल्डरों को ट्रैक नहीं करता है, और चूंकि Git डायरेक्टरीज़ के बजाय फ़ाइलों को ट्रैक करता है, इसलिए किसी खाली डायरेक्टरी को version control में शामिल करने के लिए आपको उसमें एक फ़ाइल डालनी होती है। सामान्यतः इस उद्देश्य के लिए .gitkeep का उपयोग किया जाता है, हालांकि इसका कोई विशेष कार्य नहीं है। यह सिर्फ यह सुनिश्चित करने का एक तरीका है कि वह फ़ोल्डर repository में commit हो सके।

### gitignore

- git ignore generator

### nodemon

`npm i -D nodemon`

- jaise hi file save hoti hain vese hi run kar deti hain

### English:

- npm i -D nodemon installs nodemon as a dev dependency. Nodemon automatically restarts your Node.js application whenever it detects changes in the files, saving you from manually restarting the server. The -D flag stands for "devDependencies," meaning it only installs nodemon for development purposes and won't be included when the project is deployed or used in production.

### Hindi:

- npm i -D nodemon से nodemon को dev dependency के रूप में install किया जाता है। Nodemon आपकी Node.js एप्लिकेशन को ऑटोमैटिकली रीस्टार्ट करता है जब भी वह किसी फ़ाइल में बदलाव देखता है, जिससे आपको मैन्युअली सर्वर रीस्टार्ट करने की ज़रूरत नहीं होती। -D फ्लैग "devDependencies" के लिए होता है, यानी nodemon सिर्फ डेवलपमेंट के लिए install होता है, प्रोडक्शन में नहीं।

### prettier

`npm i -D prettier`

- npm i -D prettier से Prettier को dev dependency के रूप में install किया जाता है। Prettier एक कोड फॉर्मैटर है जो आपके कोड को ऑटोमैटिकली फॉर्मैट करता है ताकि कोड का स्टाइल एकसमान रहे। -D फ्लैग इसे डेवलपमेंट के लिए install करता है, यानी इसे सिर्फ डेवलपमेंट के दौरान इस्तेमाल किया जाएगा, प्रोडक्शन में नहीं।

- ise install kane ke bad do theen file ko add karna hota hain

#### "singleQuote": false,

- iska matlab hum apne code me single quote nahi chahte hain

#### "bracketSpacing": true,

- Prettier के कॉन्फ़िगरेशन में "bracketSpacing": true सेटिंग यह तय करती है कि ब्रैकेट्स (कोष्ठकों) के बीच में स्पेस शामिल की जाएगी या नहीं। जब इसे true पर सेट किया जाता है, तो यह ब्रैकेट्स के अंदर स्पेस जोड़ता है, जैसे { foo: bar } और [ 1, 2, 3 ]। यदि इसे false पर सेट किया जाए, तो स्पेस हटा दिए जाते हैं, जिससे {foo: bar} और [1, 2, 3] दिखाई देगा।

#### "tabWidth": 2

- Prettier कॉन्फ़िगरेशन में "tabWidth": 2 यह निर्दिष्ट करता है कि आपके कोड में इंडेंटेशन के लिए कितनी स्पेस का उपयोग किया जाएगा। इसे 2 पर सेट करने का मतलब है कि प्रत्येक इंडेंटेशन लेवल 2 स्पेस चौड़ा होगा। इससे आपके कोडबेस में एकसमान फॉर्मेटिंग सुनिश्चित होती है।

#### "trailingComma": "es5",

-

#### "semi": true

- Prettier कॉन्फ़िगरेशन में "semi": true यह निर्दिष्ट करता है कि स्टेटमेंट्स के अंत में सेमीकोलन शामिल किया जाए या नहीं। जब इसे true पर सेट किया जाता है, तो Prettier स्वचालित रूप से हर स्टेटमेंट के अंत में सेमीकोलन जोड़ देगा। इससे एकसमान स्टाइल बनाए रखने में मदद मिलती है और JavaScript में ऑटोमैटिक सेमीकोलन इंसर्शन से संभावित समस्याओं को भी रोका जा सकता है।

### prettierignore

-.prettierignore एक कॉन्फ़िगरेशन फ़ाइल है जिसका उपयोग Prettier के साथ यह निर्दिष्ट करने के लिए किया जाता है कि कौन-कौन से फ़ाइलें और डायरेक्टरीज़ को कोड फॉर्मेटिंग के दौरान नजरअंदाज किया जाए। यह .gitignore के समान काम करता है, जिससे आप विशिष्ट फ़ाइलों या फ़ोल्डरों को Prettier द्वारा प्रोसेस किए जाने से बाहर रख सकते हैं।

### process methods

- process.exit(1) ek Node.js method hai jo program ko terminate karne ke liye use hota hai. Yahaan 1 ek exit code hai jo indicate karta hai ki program error ke sath terminate hua hai. Node.js me, jab aap process.exit() ko call karte hain, tab aap ek optional exit code specify kar sakte hain:

- 0 ka matlab hai ki program successfully execute hua hai bina kisi error ke.
- 1 ya koi bhi non-zero value indicate karti hai ki program mein koi error aayi hai.

#### Exit codes ka use program ke termination status ko indicate karne ke liye hota hai.

- 0: Success
- 1: General error
- 2: Misuse of shell builtins (according to Bash documentation)
- 126: Command invoked cannot execute
- 127: Command not found
- 130: Script terminated by Ctrl+C
- 137: Script terminated by kill -9 (SIGKILL)

#### cloudinary url

- Cloudinary URL woh URLs hote hain jo aapke media files (jaise images, videos) ko Cloudinary ke servers par host karne ke liye use hote hain. Cloudinary ek cloud-based service hai jo media management aur delivery ke liye tools provide karti hai.

### mongoose-aggregate-paginate-v2

`npm i mongoose-aggregate-paginate-v2`

- mongoose-aggregate-paginate-v2 ek Mongoose plugin hai jo aapko MongoDB ke aggregate queries ko easily paginate karne ki suvidha deta hai. Iska istemal aapko large datasets ke results ko pages mein divide karne ke liye hota hai, jisse data ko dekhna aur manage karna asaan ho jata hai.

`videoSchema.plugin(mongooseAggregatePaginate)`

- hum khud ke plugin bhi add kar sakte hain mongoose me

### bcrypt

`npm i bcrypt`

### jwt

`npm install jsonwebtoken`

- jwt ek bearer token hain bearer token ka matlab hain jo usko bearer karta hai hum usko sahi manlete hain yani ki ye token jiske pass hain jo bhi mujhe bhejega me usko data bhej dunga ek cahbi ke tarha hain

- jsonwebtoken ek powerful aur flexible library hai jo JWTs ke saath kaam karne ke liye zaroori tools provide karti hai. Ye aapko user authentication aur secure data exchange mein madad karegi.

1. Token Creation: Aap asani se JWT create kar sakte hain apne user information aur secret key ka istemal karke.

2. Token Verification: Is library ka istemal karke aap tokens ko verify kar sakte hain, jisse aap ensure kar sakte hain ki token valid hai ya nahi.
3. Payload Support: Aap token ke andar custom payload (user ID, roles, expiration time, etc.) embed kar sakte hain.
4. Expiration: Aap token ke liye expiration time set kar sakte hain, jisse security badhti hai.

#### Use Cases:

- User Authentication: Login ke baad user ko JWT provide karke uski identity ko verify karna
- API Security: APIs ke endpoints ko secure karna taaki sirf valid users hi access kar sakein.
- Information Exchange: Securely data share karna bina server state maintain kiye.

### pre Hook

- me chahta hun ki data save hone se pahele password encryt ho jaye (middeleware bana sakte hain)

#### custom hook

`userSchema.methods.isPasswordCorrect `

- hum coustom hook bana sakte hain

### SHA- 256

- SHA-256 (Secure Hash Algorithm 256-bit) एक क्रिप्टोग्राफिक हैश फ़ंक्शन है जो एक इनपुट डेटा को 256-बिट (32-बाइट) की एक अद्वितीय और स्थायी हैश मान में परिवर्तित करता है। यह डेटा की सुरक्षा और अखंडता सुनिश्चित करने के लिए प्रयोग किया जाता है। यहाँ SHA-256 के कुछ मुख्य पहलू दिए गए हैं:

### file upload karne ke liye

### multer

`npm i multer`
### Disk Storage (डिस्क स्टोरेज)

1. परिभाषा: डिस्क स्टोरेज में हार्ड ड्राइव (HDD) या सॉलिड-स्टेट ड्राइव (SSD) पर डेटा संग्रहीत होता है।
2. क्षमता: यह सामान्यतः मेमोरी स्टोरेज से बहुत बड़ी क्षमता प्रदान करता है। आप इसमें टेराबाइट्स डेटा स्टोर कर सकते हैं।
3. स्थायित्व: डेटा पावर बंद होने पर भी बना रहता है, जिससे यह लंबे समय के लिए संग्रहण के लिए उपयुक्त है।
4. गति: यह मेमोरी स्टोरेज की तुलना में धीमी होती है। डेटा को पढ़ने और लिखने में अधिक समय लगता है।
5. उपयोग के मामले: बड़े फाइलों, डेटाबेस और बैकअप डेटा को संग्रहीत करने के लिए आदर्श।

### Memory Storage (मेमोरी स्टोरेज)
1. परिभाषा: मेमोरी स्टोरेज आमतौर पर RAM (रैंडम एक्सेस मेमोरी) को संदर्भित करता है, जहाँ डेटा अस्थायी रूप से संग्रहीत होता है।
2. क्षमता: इसकी क्षमता आमतौर पर डिस्क स्टोरेज से कम होती है, जैसे कि कंप्यूटर में 8GB से 64GB RAM हो सकती है।
3. स्थायित्व: पावर बंद होने पर डेटा खो जाता है, इसलिए यह लंबे समय के लिए संग्रहण के लिए उपयुक्त नहीं है।
4. गति: इसकी गति डिस्क स्टोरेज की तुलना में बहुत तेज होती है। डेटा को तुरंत एक्सेस करना आसान होता है।
5. उपयोग के मामले: एप्लिकेशन चलाने, अस्थायी डेटा स्टोरेज और तेजी से डेटा पहुँच के लिए सर्वोत्तम।

#### upload files

1. upload.fields([
यहां, हम upload मिडलवेयर (आम तौर पर Multer जैसे लाइब्रेरी से) का उपयोग कर रहे हैं ताकि फ़ाइल अपलोड को संभाला जा सके। fields मेथड एक से अधिक फ़ाइलों को अपलोड करने की अनुमति देती है।

2. { name:"avatar", maxCount:1 },
यह ऑब्जेक्ट यह निर्दिष्ट करता है कि एक अपलोड फ़ील्ड जिसका नाम avatar है, केवल एक फ़ाइल अपलोड की जा सकती है।

3. { name:"coverImage", maxCount:1 }
यह भी एक अपलोड फ़ील्ड को निर्दिष्ट करता है जिसका नाम coverImage है, और इसमें भी केवल एक फ़ाइल अपलोड की जा सकती है।

4. ]),
यह upload.fields मेथड कॉल को बंद करता है।

`npm i cloudinary`

- cloudinary ek powerful cloud-based image and video management platform hai jo aapko file upload, karvte hain aur sotre karte hain ek tarha ka service aws jaisa.

`const uploadOnCloudinary = async (localFilePath) => {`

- Hindi: यह लाइन एक asynchronous function uploadOnCloudinary को define करती है जो localFilePath (local file का path) को argument के रूप में लेती है।

`const response = await cloudinary.uploader.upload(localFilePath, {resource_type: "auto" })`
-  यह file को Cloudinary पर upload करता है, दिए गए localFilePath का उपयोग करके। resource_type: "auto" Cloudinary को file के type (image, video, आदि) को अपने आप पहचानने की अनुमति देता है।

`fs.unlinkSync(localFilePath)`
- सफल upload के बाद, यह fs.unlinkSync काउपयोग करके local file को delete कर देता हैताकि storage space खाली हो सके।

- अगर upload सफल होता है, तो यह Cloudinary से आए response object को return करता है, जिसमें uploaded file का URL जैसे details होते हैं।


## HTTP and HTTPS
- HTTP ka matlab hai "HyperText Transfer Protocol," aur yeh ek protocol hai jo web browsers aur servers ke beech data transfer karne ke liye use hota hai. Yeh unsecured hai, iska matlab hai ki isme data encryption nahi hoti, toh yeh sensitive information ke liye safe nahi hai.
- HTTPS ka matlab hai "HyperText Transfer Protocol Secure." Yeh HTTP ka secured version hai, jisme SSL (Secure Sockets Layer) ya TLS (Transport Layer Security) encryption use hoti hai. Iska matlab hai ki data transfer karte waqt yeh encrypted hota hai, isliye yeh zyada secure hai, aur yeh sensitive information jaise passwords aur credit card details ke liye recommend kiya jata hai.

 #### http headers
- HTTP headers web communication mein metadata provide karte hain. Yeh additional information hoti hai jo client (browser) aur server ke beech request aur response mein bheji jaati hai. HTTP headers ka use requests ko customize karne, responses ko describe karne, aur data transfer ke behavior ko control karne ke liye hota hai.

- data ke bare me  data
- meta data kaisa hota hain key-value pair jaisa hota hain aur request aue respone me bhi header hote hain header kya hain meta data

#### header types

- caching = ye request abhi ai thi iske cache se data vapass de sakte hain 

- Authorization header se authentication tokens ya credentials bheje jaate hain, jisse secure access control hota hai.

- manage state =  user ki state kya hain kya vo guest user kya vo loggedIn user hain user state ki position dekhte hain

#### header catagory 
- Request Headers => jo client se data a rha hain use hum  Request Headers bolte hain

- Respones Headers => jo ki server se data ayega vo respones Headers hain

- Representation Headers => ye hume bate hain ki data kis encoding me hain ya kis compression me hain

- payload Headers => ye bus ek data hain jaise ki  jo bhi hume data bhejna hain jaise hume kisi ki underscoreId bhejna hain ya fir normaly hume kisi ka id bhejna hain ya eamil bhejna hain colunm laga kar data baher dete hain

#### http methods 
- GET: data ko lena hota hain jab hum request karte hian get se response bhejta hain

- head: isme body message nahi hota hain sirf response header vapass atah hain iska istemal header bhejne ke liye kiya jata body ko nahi bheja jata hain

- Options: Server ko yeh poochne ke liye istemal hota hai ke wo kis kis HTTP methods ko support karta hai.

- trace: debugging ke kaam ata hain , HTTP method ka istemal server par diagnostic purposes ke liye hota hai. Yeh method client ko server tak request ko trace karne ki suvidha deta hai, taaki client jaan sake ki request kaise process ho rahi hai.

- Delete: Server se kisi resource ko delete karne ke liye istemal hota hai.

- put:ye replace karta hain resource ko 

- PATCH: Kisi existing resource ka partial update karne ke liye istemal hota hai.

- POST: Kisi new resource ko create karne ke liye istemal hota hai. example: user add kardo product add kro do

#### HTTP status code
- 1xx: (1xx ka matlab 102,104,199) iska use information ke liye use ki jata hain 

- 2xx: successfully ho gaya hain

- 3xx: redirect ho gaya hain

- 4xx:client error (password,file galt hain tab ye bhejte hain )

- 5xx:server error

### req.body
- form  ya json se data a rha hain to req.body me data mil jayega

`if([fullname,email,username,password].some((field)=> field?.trim() === "")){throw new ApiError(400,"fullname is required")}`

- Ye line JavaScript ka code hai jo check karta hai ki kya fullname, email, username, ya password kisi bhi field mein khali ya sirf spaces hain.

- some method ka istemal kiya gaya hai jo array ke elements par iterate karta hai.

- field?.trim() === "" ka matlab hai ki agar kisi field ki value khali hai ya sirf spaces hain, to condition true ho jayegi.

- Agar koi bhi field khali milti hai, to throw new ApiError(400,"fullname is required") ke zariye ek error throw kiya jata hai, jo 400 status code ke saath "fullname is required" message deta hai.

### .select("password - refreshToken")

- select() method ka istemal kiya gaya hai taaki aap specify kar sakein ki aapko kaunse fields retrieve karne hain.

- Yahan "-password -refreshToken" ka matlab hai ki aap password aur refreshToken fields ko exclude kar rahe hain.

- Minus sign (-) ka istemal un fields ko chhodne ke liye hota hai, yani in fields ki values response mein nahi aayengi.

### validation  true or false

`await user.save({ validateBeforeSave: false })  kya kar rha hain`

- validateBeforeSave: false Mongoose mein ek option hai jo aapko document ko save karte waqt validation checks ko bypass karne ki ijaazat deta hai. Iska matlab hai:

1. Validation Skip: Jab aap is option ka istemal karte hain, toh Mongoose aapke schema ke rules (jaise required fields ya data types) check nahi karega. Yeh zaroori ho sakta hai agar aapko pata hai ki aapka data valid hai ya aap kisi specific situation mein validation nahi chahte.

2. Use Cases:

- Bulk operations mein jab aapko performance ki zaroorat hoti hai.
- Jab aap data ko initialize ya migrate kar rahe hote hain aur aapko validation ki parwaah nahi hoti.
- Temporary updates ya fixes karte waqt.

3. Risks: Validation bypass karne se data inconsistency ka khatra badh jaata hai, toh is option ka istemal soch samajh kar karna chahiye.

#### true
- Agar aap validateBeforeSave ko true karte hain (yaani default behavior), toh Mongoose document save karne se pehle validation checks karega. Yeh kya karega:

1. Validation Checks: Mongoose aapke schema mein defined rules (jaise required fields, data types, etc.) ko check karega. Agar document kisi bhi validation rule ko violate karta hai, toh save operation fail ho jayega.

### Example Scenario:
- Agar aapke user schema mein name field required hai aur aap user.name ko empty chhod dete hain, toh:

-  Agar aap validateBeforeSave: true use karte hain, toh Mongoose save operation ko fail karega aur aapko error dega.

- Agar aap validateBeforeSave: false use karte hain, toh woh user document database mein save ho jayega, chahe name empty kyun na ho.

### cookies scure

1. httpOnly: true

- Iska matlab ye hota hai ki jo cookie aap set kar rahe hain, usko client-side JavaScript access nahi kar sakta. Matlab, ye cookie sirf HTTP requests ke through hi access hogi, JavaScript ke through nahi. Iska istemal security badhane ke liye kiya jata hai, taaki cross-site scripting (XSS) attacks ke dauran cookie ko chori na kiya ja sake.

- is cookies ko koi bhi modify kar sakta hain but httpOnly jaise hi true karte aur scure true kar dete ho tab kiya hota hain ye cookies sirf aur sirf server se hi modify kya ja sakta hain aur hum fronted se isko modify nahi kar skate hain to server isnko access bhi kar leta hain hum dekh sakte hain but modify nahi hoti hain 

2. Ye option ensure karta hai ki cookie sirf HTTPS connection (secure connection) par hi bheji jaye. Agar connection HTTP hai (insecure), to ye cookie nahi bheji jayegi. Isse cookie ki security aur badhti hai, kyunki secure connection ke through hi sensitive information transfer hoti hai.

### LOGOUT

- User.findByIdAndUpdate: Ye method user ko ID ke zariye dhoondta hai aur refreshToken ko undefined set karta hai, jisse token ko effectively invalidate kiya ja raha hai.

- new: true: Is option ka matlab hai ki aapko update hone ke baad ka naya document return hoga

#### Clear Cookies:

- clearCookie: Ye method specified cookies ko clear karta hai. Is case me, aap accessToken aur refreshToken cookies ko clear kar rahe hain.

#### $set
- Ye MongoDB ka operator hai jo specified fields ko update karne ke liye istemal hota hai. Is case me:
- Iska matlab hai ki aap refreshToken field ko undefined set kar rahe hain. Ye effectively token ko invalidate kar dega, kyunki token ki koi value nahi rahegi.

###  req.params
`const {username} = req.params`
- Ye ek middleware hai jo request ke parameters ko access karne ke liye istemal hota

- Jab aap Express.js mein koi route define karte hain, toh kabhi-kabhi aapko URL se kuch specific information chahiye hoti hai. Yeh information "route parameters" kehte hain. Yeh parameters URL ke hissa hote hain jahan aap kisi value ko specify karte hain.

- /users/:username ka matlab hai ki :username ek variable hai. Jab bhi koi is route par request karega, toh :username ke jagah actual username aayega.

- Jaise agar koi request karta hai /users/johndoe, toh yahan :username ki jagah johndoe aayega.

#### req.params ka Kya Karta Hai?
- req.params ek object hai jisme sabhi route parameters hote hain.
- Is example mein, req.params mein { username: 'johndoe' } hoga.
- const { username } = req.params; ka matlab hai ki aap req.params se username ko directly nikal rahe hain.

###  User.aggregate
- Ye MongoDB ka method hai jo multiple operations ko ek hi pipeline mein chala sakta hai.

1. $match:

- Yeh stage un documents ko filter karta hai jahan username field diya gaya username variable ke saath match karta hai. username ko lower case mein convert kiya gaya hai, isliye case insensitive match hota hai.

2. $lookup (pehla):

 - Yeh stage subscriptions collection se data join karta hai. Ismein localField (_id) aur foreignField (channel) ke madhyam se match kiya jata hai. Jo results milte hain, unhein subscribers naam ke field mein store kiya jata hai.

 3. $lookup (dusra):

- Yeh stage bhi subscriptions collection se data join karta hai. Lekin is baar localField (_id) aur foreignField (subscriber) ke madhyam se match kiya jata hai. Jo results milte hain, unhein subscribedTo naam ke field mein store kiya jata hai.

4. $addFields:

- Yeh stage naye fields add karta hai:
subscribersCount: Yeh field subscribers array ki length (yaani total subscribers) ko store karta hai. 
- channelsSubscribedToCount: Yeh field subscribedTo array ki length (yaani total channels jin par user subscribed hai) ko store karta hai.
- isSubscribed: Yeh field check karta hai ki kya current user (jo req.user?._id se milta hai) subscribers array mein hai ya nahi. Agar hai, toh true return karta hai, varna false.

5. $project:

- Yeh stage specify karta hai ki kaunse fields final output mein dikhane hain. Ismein fullName, username, subscribersCount, channelsSubscribedToCount, isSubscribed, avatar, coverImage, aur email fields ko include kiya gaya hai.

- MongoDB aggregation framework mein $project stage ka use output documents mein sirf selected fields ko include ya exclude karne ke liye hota hai. Iska istemal aapko specific data dikhane ke liye kiya jata hai, jo aapke requirements ke anuroop hota hai.

- Field Selection: Aap yeh decide karte hain ki kaunse fields final output mein dikhai deni chahiye.

- New Fields Creation: Aap naye fields bhi create kar sakte hain ya existing fields ko modify kar

`{
    $project: {
        field1: 1, // Include field1
        field2: 0, // Exclude field2
        newField: { $add: ["$fieldA", "$fieldB"] } // Create newField from existing fields
    }
}`

#### summary :- Yeh aggregation query ek user ke channel ki details fetch kar rahi hai, jismein uske subscribers ki ginti, kis channels par user subscribe kiya hai, aur kya current user us channel ka subscriber hai ya nahi, yeh sab information shaamil hai. Iska output ek object hoga jo user ki details ke saath saath uski subscription statistics ko bhi dikhata hai.


1. $in
- Kya hai: $in ek operator hai jo check karta hai ki kya ek value kisi specified array mein maujood hai ya nahi.

- Iska use: Iska use aap ek array mein value ki presence check karne ke liye karte hain

- Yeh check karta hai ki kya specified value (jaise value1, value2, etc.) array ke kisi bhi element ke barabar hai.

`isSubscribed: {
    $cond: {
        if: {$in: [req.user?._id, "$subscribers.subscriber"]},
        then: true,
        else: false
    }
}`

- Ismein check kiya ja raha hai ki kya current user ka _id subscribers array ke kisi element mein hai ya nahi. Agar hai, toh isSubscribed ko true set kiya jayega, varna false.

2. $size
- Kya hai: $size operator array ki length ya size ko return karta hai.

- Yeh array ke size ya length ko return karega.

`subscribersCount: { $size: "$subscribers" }`

- Iska matlab hai ki subscribersCount mein subscribers array ki length store ho rahi hai.

3. $cond
- ek conditional operator hai jo if-else logic ko implement karta hai. Yeh aapko ek condition check karne aur uske basis par alag-alag values return karne ki facility deta hai, bilkul jaise JavaScript ka if-else statement ya ternary operator (? :).

- if: Ismein aap condition specify karte hain jo check ki jati hai. Agar yeh true hoti hai toh then wala part execute hota hai.

- then:Agar if condition true ho jati hai, toh is value ko return kiya jata hai.

- else: Agar if condition false hoti hai, toh is value ko return kiya jata hai.

`isSubscribed: {
    $cond: {
        if: { $in: [req.user?._id, "$subscribers.subscriber"] },  // Check: Agar current user subscribed hai
        then: true,  // If true: isSubscribed = true
        else: false  // If false: isSubscribed = false
    }
}`
- Yahaan if condition check kar rahi hai ki kya req.user._id (current user ka ID) subscribers.subscriber array mein hai ya nahi:

- Agar user subscribed hai, toh isSubscribed true set ho jata hai.
- Agar user subscribed nahi hai, toh isSubscribed false set hota hai.

#### subcription file 
-  Aapka subscriptionSchema MongoDB me ek subscription relationship ko dikhane ke liye use ho raha hai. Iska maqsad hai:

- Subscriber: Ye field us user ka ID rakhti hai jo kisi channel ko subscribe kar raha hai. Isme ref: "User" use hone se ye confirm hota hai ki ye User model se linked hai.

- Channel: Ye field us user ka ID rakhti hai jise subscribe kiya ja raha hai. Ye bhi User model se linked hai.

- Timestamps: { timestamps: true } option se schema ko createdAt aur updatedAt fields automatically milte hain. Ye fields aapko ye track karne me madad karti hain ki subscription kab create hui aur kab update hui.

-  Agar aapko is schema me aur features add karne hain, jaise validations ya methods, to aap pooch sakte hain!

- type: Schema.Types.ObjectId ka matlab hai ki aap us field me MongoDB me object IDs store karna chahte hain. Ye IDs kisi document ka unique identifier hota hai jo aapko collections (jaise User collection) me specific documents ko reference karne me madad karta hai.