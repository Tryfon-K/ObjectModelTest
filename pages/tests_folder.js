exports.TestsFolder = class TestsFolder {


    constructor(page) {

        this.page = page;
        this.my_first_test_file = page.getByRole('link', { name: 'myFirstTest.spec.js, (File)' });

    }


}