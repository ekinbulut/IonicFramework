export class Details {

    public Author: String;
    public Publisher: String;
    public PublishDate: Number;
    public Series: String;
    public Genre: String;
    public Shelf: String;
    public RackNumber: Number;
}

export class BookModel {

    public Name: String;
    public Details = new Details();

    constructor() {

    }
}