export class Article {
    constructor(
      public author: string,
      public title: string,
      public description: string,
      public url: string,
      public urlToImage: string,
      public publishedAt: string,
      public file?: File
    ) {}

    isValid(): boolean {
      return (
          this.author.trim() !== '' &&
          this.title.trim() !== '' &&
          this.description.trim() !== '' &&
          this.url.trim() !== ''
      );
  }

  }