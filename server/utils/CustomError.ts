class CustomError extends Error {
  public status: number;

  public message: string;

  constructor(status: number, message: string) {
    super();
    this.status = status || 500;
    this.message = message || 'Internal server error!!!';
  }
}

export default CustomError;
