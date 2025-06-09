function toggleMenu() {
    const navButton = document.querySelector('#btn-menu');
    const navMenu = document.querySelector('nav ul');
    const navClose = document.querySelector('#btn-close');
    navButton.addEventListener('click', function () {
        navMenu.classList.add('active');
    });
    navClose.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
}

toggleMenu();

async function getServices() {
    const res = await fetch('http://localhost:3000/services');
    const services = await res.json();

    services.map(service => createServiceItem(service.image, service.title, service.description, 'Learn More', service.link));

}

async function getTestimonials() {
    const res = await fetch('http://localhost:3000/testimonials');
    const testimonials = await res.json();

    testimonials.map(testimonial => createTestimonialItem(testimonial.author, testimonial.image, testimonial.area, testimonial.testimonial));

}

async function getFaqs() {
    const res = await fetch('http://localhost:3000/faqs');
    const faqs = await res.json();

    faqs.map(faq => createFaqItem(faq.question, faq.answer));

}

async function getProjects() {
    const res = await fetch('http://localhost:3000/projects');
    const projects = await res.json();

    projects.map(project => createProjectItem(project.image, project.title, project.category));

}

async function getTeam() {
    const res = await fetch('http://localhost:3000/team');
    const team = await res.json();

    team.map(item => createTeamItem(item.image, item.name, item.area, item.slogan));

}

async function getStrategyCards() {
    const res = await fetch('http://localhost:3000/strategyCards');
    const strategyCard = await res.json();

    strategyCard.map(item => createstrategyCardItem(item.id, item.title, item.description));

}

getServices();
getTestimonials();
getFaqs();
getProjects();
getTeam();
getStrategyCards();

function createstrategyCardItem(id, title, description) {
    const strategyCardList = document.querySelector('.strategy-cards-container');
    const strategyCardItemContainer = document.createElement('div');
    strategyCardItemContainer.classList.add('strategy-card');

    const orderItem = document.createElement('div');
    orderItem.classList.add('order');
    orderItem.textContent = `0${id + 1}`;

    const infoItem = document.createElement('div');
    infoItem.classList.add('info');
    const infoTitle = document.createElement('h3');
    infoTitle.textContent = title;
    const infoDescription = document.createElement('p');
    infoDescription.textContent = description;
    infoItem.append(infoTitle, infoDescription);
    strategyCardItemContainer.append(orderItem, infoItem);

    strategyCardList.append(strategyCardItemContainer);
}

function createTeamItem(image, name, area, slogan) {
    const teamList = document.querySelector('.team-list');
    const teamItemContainer = document.createElement('div');
    teamItemContainer.classList.add('team-item');

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', image);
    teamItemContainer.append(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = name;
    teamItemContainer.append(titleElement);

    const paragraph = document.createElement('p');
    paragraph.textContent = area;
    teamItemContainer.append(paragraph);

    const paragrap2 = document.createElement('p');
    paragrap2.textContent = slogan;
    teamItemContainer.append(paragrap2);

    teamList.append(teamItemContainer);
}

function createProjectItem(image, title, category) {
    const projectsList = document.querySelector('.projects-container');
    const projectItemContainer = document.createElement('div');
    projectItemContainer.classList.add('project');

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', image);
    projectItemContainer.append(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    projectItemContainer.append(titleElement);

    const paragraph = document.createElement('p');
    paragraph.textContent = category;
    projectItemContainer.append(paragraph);

    projectsList.append(projectItemContainer);
}

function createServiceItem(imageUrl, title, description, linkText, linkHref) {
    const servicesList = document.querySelector('.services-list');
    const serviceItemContainer = document.createElement('div');
    serviceItemContainer.classList.add('service-item');

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageUrl);
    serviceItemContainer.append(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    serviceItemContainer.append(titleElement);

    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    serviceItemContainer.append(paragraph);

    const link = document.createElement('a');
    link.setAttribute('href', linkHref);
    link.textContent = linkText;
    serviceItemContainer.append(link);

    servicesList.append(serviceItemContainer);
}

function createTestimonialItem(author, image, area, testimonial) {
    const testimonialsList = document.querySelector('.testimonials-list');
    const testimonialItemContainer = document.createElement('div');
    testimonialItemContainer.classList.add('testimonial-item');

    const paragraph = document.createElement('p');
    paragraph.textContent = testimonial;
    testimonialItemContainer.append(paragraph);

    const testimonialAuthor = document.createElement('div');
    testimonialAuthor.classList.add('author');

    const testimonialImage = document.createElement('div');
    testimonialImage.classList.add('image');

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', image);
    testimonialImage.append(imageElement);

    const testimonialBio = document.createElement('div');
    testimonialBio.classList.add('bio');

    const authorElement = document.createElement('h3');
    authorElement.textContent = author;
    testimonialBio.append(authorElement);

    const areaElement = document.createElement('p');
    areaElement.textContent = area;
    testimonialBio.append(areaElement);

    testimonialAuthor.append(testimonialImage, testimonialBio);

    testimonialItemContainer.append(paragraph, testimonialAuthor);

    testimonialsList.append(testimonialItemContainer);
}

function createFaqItem(question, answer) {
    const faqsList = document.querySelector('.faqs-list');
    const faqItemContainer = document.createElement('div');
    faqItemContainer.classList.add('faqs-item');

    const faqContainer = document.createElement('details');
    const faqQuestion = document.createElement('summary');
    faqQuestion.textContent = question;
    const faqAnswer = document.createElement('p');
    faqAnswer.textContent = answer;

    faqContainer.append(faqQuestion, faqAnswer);

    faqsList.append(faqContainer);
}

