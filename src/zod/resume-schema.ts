import { z } from "zod"

export default z.object({ 
/**link to the version of the schema that can validate the resume*/
"$schema": z.string().url().describe("link to the version of the schema that can validate the resume").optional(), "basics": z.object({ "name": z.string().optional(), 
/**e.g. Web Developer*/
"label": z.string().describe("e.g. Web Developer").optional(), 
/**URL (as per RFC 3986) to a image in JPEG or PNG format*/
"image": z.string().describe("URL (as per RFC 3986) to a image in JPEG or PNG format").optional(), 
/**e.g. thomas@gmail.com*/
"email": z.string().email().describe("e.g. thomas@gmail.com").optional(), 
/**Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923*/
"phone": z.string().describe("Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923").optional(), 
/**URL (as per RFC 3986) to your website, e.g. personal homepage*/
"url": z.string().url().describe("URL (as per RFC 3986) to your website, e.g. personal homepage").optional(), 
/**Write a short 2-3 sentence biography about yourself*/
"summary": z.string().describe("Write a short 2-3 sentence biography about yourself").optional(), "location": z.object({ 
/**
* To add multiple address lines, use 
* . For example, 1234 Glücklichkeit Straße
* Hinterhaus 5. Etage li.
*/
"address": z.string().describe("To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.").optional(), "postalCode": z.string().optional(), "city": z.string().optional(), 
/**code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN*/
"countryCode": z.string().describe("code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN").optional(), 
/**The general region where you live. Can be a US state, or a province, for instance.*/
"region": z.string().describe("The general region where you live. Can be a US state, or a province, for instance.").optional() }).catchall(z.any()).optional(), 
/**Specify any number of social networks that you participate in*/
"profiles": z.array(z.object({ 
/**e.g. Facebook or Twitter*/
"network": z.string().describe("e.g. Facebook or Twitter").optional(), 
/**e.g. neutralthoughts*/
"username": z.string().describe("e.g. neutralthoughts").optional(), 
/**e.g. http://twitter.example.com/neutralthoughts*/
"url": z.string().url().describe("e.g. http://twitter.example.com/neutralthoughts").optional() }).catchall(z.any())).describe("Specify any number of social networks that you participate in").optional() }).catchall(z.any()).optional(), "work": z.array(z.object({ 
/**e.g. Facebook*/
"name": z.string().describe("e.g. Facebook").optional(), 
/**e.g. Menlo Park, CA*/
"location": z.string().describe("e.g. Menlo Park, CA").optional(), 
/**e.g. Social Media Company*/
"description": z.string().describe("e.g. Social Media Company").optional(), 
/**e.g. Software Engineer*/
"position": z.string().describe("e.g. Software Engineer").optional(), 
/**e.g. http://facebook.example.com*/
"url": z.string().url().describe("e.g. http://facebook.example.com").optional(), "startDate": z.any().optional(), "endDate": z.any().optional(), 
/**Give an overview of your responsibilities at the company*/
"summary": z.string().describe("Give an overview of your responsibilities at the company").optional(), 
/**Specify multiple accomplishments*/
"highlights": z.array(z.string().describe("e.g. Increased profits by 20% from 2011-2012 through viral advertising")).describe("Specify multiple accomplishments").optional() }).catchall(z.any())).optional(), "volunteer": z.array(z.object({ 
/**e.g. Facebook*/
"organization": z.string().describe("e.g. Facebook").optional(), 
/**e.g. Software Engineer*/
"position": z.string().describe("e.g. Software Engineer").optional(), 
/**e.g. http://facebook.example.com*/
"url": z.string().url().describe("e.g. http://facebook.example.com").optional(), "startDate": z.any().optional(), "endDate": z.any().optional(), 
/**Give an overview of your responsibilities at the company*/
"summary": z.string().describe("Give an overview of your responsibilities at the company").optional(), 
/**Specify accomplishments and achievements*/
"highlights": z.array(z.string().describe("e.g. Increased profits by 20% from 2011-2012 through viral advertising")).describe("Specify accomplishments and achievements").optional() }).catchall(z.any())).optional(), "education": z.array(z.object({ 
/**e.g. Massachusetts Institute of Technology*/
"institution": z.string().describe("e.g. Massachusetts Institute of Technology").optional(), 
/**e.g. http://facebook.example.com*/
"url": z.string().url().describe("e.g. http://facebook.example.com").optional(), 
/**e.g. Arts*/
"area": z.string().describe("e.g. Arts").optional(), 
/**e.g. Bachelor*/
"studyType": z.string().describe("e.g. Bachelor").optional(), "startDate": z.any().optional(), "endDate": z.any().optional(), 
/**grade point average, e.g. 3.67/4.0*/
"score": z.string().describe("grade point average, e.g. 3.67/4.0").optional(), 
/**List notable courses/subjects*/
"courses": z.array(z.string().describe("e.g. H1302 - Introduction to American history")).describe("List notable courses/subjects").optional() }).catchall(z.any())).optional(), 
/**Specify any awards you have received throughout your professional career*/
"awards": z.array(z.object({ 
/**e.g. One of the 100 greatest minds of the century*/
"title": z.string().describe("e.g. One of the 100 greatest minds of the century").optional(), "date": z.any().optional(), 
/**e.g. Time Magazine*/
"awarder": z.string().describe("e.g. Time Magazine").optional(), 
/**e.g. Received for my work with Quantum Physics*/
"summary": z.string().describe("e.g. Received for my work with Quantum Physics").optional() }).catchall(z.any())).describe("Specify any awards you have received throughout your professional career").optional(), 
/**Specify any certificates you have received throughout your professional career*/
"certificates": z.array(z.object({ 
/**e.g. Certified Kubernetes Administrator*/
"name": z.string().describe("e.g. Certified Kubernetes Administrator").optional(), "date": z.any().optional(), 
/**e.g. http://example.com*/
"url": z.string().url().describe("e.g. http://example.com").optional(), 
/**e.g. CNCF*/
"issuer": z.string().describe("e.g. CNCF").optional() }).catchall(z.any())).describe("Specify any certificates you have received throughout your professional career").optional(), 
/**Specify your publications through your career*/
"publications": z.array(z.object({ 
/**e.g. The World Wide Web*/
"name": z.string().describe("e.g. The World Wide Web").optional(), 
/**e.g. IEEE, Computer Magazine*/
"publisher": z.string().describe("e.g. IEEE, Computer Magazine").optional(), "releaseDate": z.any().optional(), 
/**e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html*/
"url": z.string().url().describe("e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html").optional(), 
/**Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.*/
"summary": z.string().describe("Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.").optional() }).catchall(z.any())).describe("Specify your publications through your career").optional(), 
/**List out your professional skill-set*/
"skills": z.array(z.object({ 
/**e.g. Web Development*/
"name": z.string().describe("e.g. Web Development").optional(), 
/**e.g. Master*/
"level": z.string().describe("e.g. Master").optional(), 
/**List some keywords pertaining to this skill*/
"keywords": z.array(z.string().describe("e.g. HTML")).describe("List some keywords pertaining to this skill").optional() }).catchall(z.any())).describe("List out your professional skill-set").optional(), 
/**List any other languages you speak*/
"languages": z.array(z.object({ 
/**e.g. English, Spanish*/
"language": z.string().describe("e.g. English, Spanish").optional(), 
/**e.g. Fluent, Beginner*/
"fluency": z.string().describe("e.g. Fluent, Beginner").optional() }).catchall(z.any())).describe("List any other languages you speak").optional(), "interests": z.array(z.object({ 
/**e.g. Philosophy*/
"name": z.string().describe("e.g. Philosophy").optional(), "keywords": z.array(z.string().describe("e.g. Friedrich Nietzsche")).optional() }).catchall(z.any())).optional(), 
/**List references you have received*/
"references": z.array(z.object({ 
/**e.g. Timothy Cook*/
"name": z.string().describe("e.g. Timothy Cook").optional(), 
/**e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.*/
"reference": z.string().describe("e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.").optional() }).catchall(z.any())).describe("List references you have received").optional(), 
/**Specify career projects*/
"projects": z.array(z.object({ 
/**e.g. The World Wide Web*/
"name": z.string().describe("e.g. The World Wide Web").optional(), 
/**Short summary of project. e.g. Collated works of 2017.*/
"description": z.string().describe("Short summary of project. e.g. Collated works of 2017.").optional(), 
/**Specify multiple features*/
"highlights": z.array(z.string().describe("e.g. Directs you close but not quite there")).describe("Specify multiple features").optional(), 
/**Specify special elements involved*/
"keywords": z.array(z.string().describe("e.g. AngularJS")).describe("Specify special elements involved").optional(), "startDate": z.any().optional(), "endDate": z.any().optional(), 
/**e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html*/
"url": z.string().url().describe("e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html").optional(), 
/**Specify your role on this project or in company*/
"roles": z.array(z.string().describe("e.g. Team Lead, Speaker, Writer")).describe("Specify your role on this project or in company").optional(), 
/**Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'*/
"entity": z.string().describe("Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'").optional(), 
/** e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'*/
"type": z.string().describe(" e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'").optional() }).catchall(z.any())).describe("Specify career projects").optional(), 
/**The schema version and any other tooling configuration lives here*/
"meta": z.object({ 
/**URL (as per RFC 3986) to latest version of this document*/
"canonical": z.string().url().describe("URL (as per RFC 3986) to latest version of this document").optional(), 
/**A version field which follows semver - e.g. v1.0.0*/
"version": z.string().describe("A version field which follows semver - e.g. v1.0.0").optional(), 
/**Using ISO 8601 with YYYY-MM-DDThh:mm:ss*/
"lastModified": z.string().describe("Using ISO 8601 with YYYY-MM-DDThh:mm:ss").optional() }).catchall(z.any()).describe("The schema version and any other tooling configuration lives here").optional() }).catchall(z.any())
