// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

  
  export type LatestBook = {
    id: string;
    title: string;
    name: string;
    description: string;
    nombredepage: number;
    nombredepagelue: number;
  };
  
  // The database returns a number for amount, but we later format it to a string with the formatCurrency function
  export type LatestBookRaw = Omit<LatestBook, 'nombredepagelue'> & {
    nombredepagelue: number;
  };
  
  export type BookTable = {
    id: string;
    title: string;
    nombredepage: number;
    nombredepagelue: number;
    auteur: string;
    description: string;
  };
  
export type CustomersTableType = {
    id: string;
    title: string;
    nombredepage: number;
    nombredepagelue: number;
    auteur: string;
    description: string;
  };
   
export type BookForm = {
    id: string;
    title: string;
    nombredepage: number;
    nombredepagelue: number;
    auteur: string;
    description: string;
  };


export type Book = {
    id: string;
    title: string;
    nombredepage: number;
    nombredepagelue: number;
    auteur: string;
    description: string;

}