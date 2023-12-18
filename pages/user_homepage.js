exports.UserHomePage = class UserHomePage {

    constructor(page) {
        
        this.page = page;


    }

    async selectProject(project_name) {

        await this.page.getByRole('link', { name: project_name , exact: true }).first().click();
    }
}