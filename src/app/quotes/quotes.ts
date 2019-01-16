import { DatePipe } from '@angular/common';

export class Quotes {
    constructor (
        public name: string,
        public author: string,
        public quote: string,
        public upVotes: number,
        public downVotes: number,
        public timePublished: object,
        ) {}
}
