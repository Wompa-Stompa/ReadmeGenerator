const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Table of Contents
  * [License](#license)
  * [Questions](#questions)
  * [Project Title](#projectTitle)
  * [Project Description](#description)
  * [Project Installation](#installation)
  * [User Story](#usage)
  * [Contributors](#contributing)
  * [Technologies Implemented](#tests)
  * [Author Contact](#email)
  * [Github](#username)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## UserStory
  ${data.usage}
  ## License 
  This project is licensed under ${data.license}
  ## Contributing 
  ${data.contributing}
  ## Tech
  ${data.tests}
  ## Author's Email
  ${data.email}
  ## Github
 You can view more of my projects at https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
