exports.ProjectPage = class ProjectPage {


    constructor(page) {

        this.page = page;
        this.tests_item = page.getByRole('link', { name: 'tests' });
    }

    async click_tests_folder() {
       
       await this.tests_item.click();

    }
}