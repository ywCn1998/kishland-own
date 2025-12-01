export type Problem<T = undefined> = {
   status: string
   message: string | string[]
   data?: T
}

export type BadRequestError<T = undefined> = Problem<T>
export type UnauthorizedError<T = undefined> = Problem<T>
export type ValidationError<T = undefined> = Problem<T>
export type NotFoundError<T = undefined> = Problem<T>
export type DuplicateError<T = undefined> = Problem<T>
export type NetworkError<T = undefined> = Problem<T>
export type UnhandledException<T = undefined> = Problem<T>

export type ApiError<T = undefined> =
   | BadRequestError<T>
   | NetworkError<T>
   | NotFoundError<T>
   | UnhandledException<T>
   | UnauthorizedError<T>
   | ValidationError<T>
   | DuplicateError<T>
