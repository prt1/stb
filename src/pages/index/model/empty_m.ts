import { MainEntity } from "src/entitys/main";

export class EmptyModel {
    private nttMain: MainEntity;

    constructor(mainNtt: MainEntity) {
        this.nttMain = mainNtt;
    }

    getData() {
        return new Promise((resolve, reject) => {
            resolve({});
        });
    }
}