export default class Sheet {

    constructor() {
        
        this.original = {
            songName: '',
            composer: [],
        };

        this.cover = {
            coverComposer: [],
            version: [],
            difficulty: "",
            coverPublishYear: "",
            numberOfPages: "",
            pianoSheetUrl: "",
            cost: "",
            videoLink: "",
            reviews: [],
            imageUrl: "",
            keywords:[],
        };

        this.animaeRelated = {
            animaeName: '',
            animaeDescription: ''
        };
    }



}

