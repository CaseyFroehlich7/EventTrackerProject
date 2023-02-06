export class CarpentryProjects {
  id: number;
  title: string;
  description: string;
  jobType: string;
  location: string;
  imgUrl: string;
  date: string;
  helpers: string;
  customerName: string;

  constructor(
    id: number = 0,
  title: string = '',
  description: string = '',
  jobType: string = '',
  location: string = '',
  imgUrl: string = '',
  date: string = '',
  helpers: string = '',
  customerName: string = ''
  ){
    this.id = id;
  this.title = title;
  this.description = description;
  this.jobType = jobType;
  this.location = location;
  this.imgUrl = imgUrl;
  this.date = date;
  this.helpers = helpers;
  this.customerName = customerName;
  }
}
