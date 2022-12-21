export interface characterType {
        name:string;
        age:number;
}

export interface Books {
    key: string;
    name: string;
    subject_type: string;
    work_count: number;
    works: Book[];
  }
  
  export interface Book {
    authors: Author[];
    availability: {};
    cover_edition_key: string;
    cover_id: number;
    edition_count: number;
    first_publish_year: number;
    has_fulltext: boolean;
    ia: string;
    ia_collection: string[];
    key: string;
    lending_edition: string;
    lending_identifier: string;
    lendinglibrary: boolean;
    printdisabled: boolean;
    public_scan: boolean;
    subject: string[];
    title: string;
  }
  
  export interface Author {
    key: string;
    name: string;
  }
  
  export interface MyBook {
    title: string
    authors: Author[]
  }
  
 