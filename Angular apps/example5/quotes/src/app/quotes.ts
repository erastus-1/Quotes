export class Quotes {
    dateToday: Date;
    showdetails: boolean;
    upvote: number;
    downvote: number;

    constructor(public id: number, public authorName: string, public description: string,  public dateSubmitted: Date, public submitterName: string){

        this.id = id;
        this.description = description;
        this.authorName = authorName;
        this.submitterName = submitterName;
        this.dateSubmitted =dateSubmitted;   
        this.showdetails = false;
        this.upvote = 0;
        this.downvote= 0; 
}
}
