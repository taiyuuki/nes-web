
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model banner
 * 
 */
export type banner = $Result.DefaultSelection<Prisma.$bannerPayload>
/**
 * Model categorys
 * 
 */
export type categorys = $Result.DefaultSelection<Prisma.$categorysPayload>
/**
 * Model roms
 * 
 */
export type roms = $Result.DefaultSelection<Prisma.$romsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banners
 * const banners = await prisma.banner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.banner`: Exposes CRUD operations for the **banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.bannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorys`: Exposes CRUD operations for the **categorys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorys
    * const categorys = await prisma.categorys.findMany()
    * ```
    */
  get categorys(): Prisma.categorysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roms`: Exposes CRUD operations for the **roms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roms
    * const roms = await prisma.roms.findMany()
    * ```
    */
  get roms(): Prisma.romsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    banner: 'banner',
    categorys: 'categorys',
    roms: 'roms'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "banner" | "categorys" | "roms"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      banner: {
        payload: Prisma.$bannerPayload<ExtArgs>
        fields: Prisma.bannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          findFirst: {
            args: Prisma.bannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          findMany: {
            args: Prisma.bannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>[]
          }
          create: {
            args: Prisma.bannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          createMany: {
            args: Prisma.bannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>[]
          }
          delete: {
            args: Prisma.bannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          update: {
            args: Prisma.bannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          deleteMany: {
            args: Prisma.bannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>[]
          }
          upsert: {
            args: Prisma.bannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.bannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.bannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      categorys: {
        payload: Prisma.$categorysPayload<ExtArgs>
        fields: Prisma.categorysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categorysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categorysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>
          }
          findFirst: {
            args: Prisma.categorysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categorysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>
          }
          findMany: {
            args: Prisma.categorysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>[]
          }
          create: {
            args: Prisma.categorysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>
          }
          createMany: {
            args: Prisma.categorysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categorysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>[]
          }
          delete: {
            args: Prisma.categorysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>
          }
          update: {
            args: Prisma.categorysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>
          }
          deleteMany: {
            args: Prisma.categorysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categorysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categorysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>[]
          }
          upsert: {
            args: Prisma.categorysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorysPayload>
          }
          aggregate: {
            args: Prisma.CategorysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorys>
          }
          groupBy: {
            args: Prisma.categorysGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorysGroupByOutputType>[]
          }
          count: {
            args: Prisma.categorysCountArgs<ExtArgs>
            result: $Utils.Optional<CategorysCountAggregateOutputType> | number
          }
        }
      }
      roms: {
        payload: Prisma.$romsPayload<ExtArgs>
        fields: Prisma.romsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.romsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.romsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>
          }
          findFirst: {
            args: Prisma.romsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.romsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>
          }
          findMany: {
            args: Prisma.romsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>[]
          }
          create: {
            args: Prisma.romsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>
          }
          createMany: {
            args: Prisma.romsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.romsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>[]
          }
          delete: {
            args: Prisma.romsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>
          }
          update: {
            args: Prisma.romsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>
          }
          deleteMany: {
            args: Prisma.romsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.romsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.romsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>[]
          }
          upsert: {
            args: Prisma.romsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$romsPayload>
          }
          aggregate: {
            args: Prisma.RomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoms>
          }
          groupBy: {
            args: Prisma.romsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.romsCountArgs<ExtArgs>
            result: $Utils.Optional<RomsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    banner?: bannerOmit
    categorys?: categorysOmit
    roms?: romsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategorysCountOutputType
   */

  export type CategorysCountOutputType = {
    roms: number
  }

  export type CategorysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roms?: boolean | CategorysCountOutputTypeCountRomsArgs
  }

  // Custom InputTypes
  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorysCountOutputType
     */
    select?: CategorysCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeCountRomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: romsWhereInput
  }


  /**
   * Count Type RomsCountOutputType
   */

  export type RomsCountOutputType = {
    banners: number
  }

  export type RomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banners?: boolean | RomsCountOutputTypeCountBannersArgs
  }

  // Custom InputTypes
  /**
   * RomsCountOutputType without action
   */
  export type RomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RomsCountOutputType
     */
    select?: RomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RomsCountOutputType without action
   */
  export type RomsCountOutputTypeCountBannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bannerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    id: number | null
  }

  export type BannerSumAggregateOutputType = {
    id: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type BannerMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    id?: true
  }

  export type BannerSumAggregateInputType = {
    id?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banner to aggregate.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type bannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bannerWhereInput
    orderBy?: bannerOrderByWithAggregationInput | bannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: bannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: number
    title: string | null
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends bannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type bannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    rom?: boolean | romsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type bannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    rom?: boolean | romsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type bannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    rom?: boolean | romsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type bannerSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type bannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["banner"]>
  export type bannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rom?: boolean | romsDefaultArgs<ExtArgs>
  }
  export type bannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rom?: boolean | romsDefaultArgs<ExtArgs>
  }
  export type bannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rom?: boolean | romsDefaultArgs<ExtArgs>
  }

  export type $bannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banner"
    objects: {
      rom: Prisma.$romsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type bannerGetPayload<S extends boolean | null | undefined | bannerDefaultArgs> = $Result.GetResult<Prisma.$bannerPayload, S>

  type bannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface bannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banner'], meta: { name: 'banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {bannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bannerFindUniqueArgs>(args: SelectSubset<T, bannerFindUniqueArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bannerFindUniqueOrThrowArgs>(args: SelectSubset<T, bannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bannerFindFirstArgs>(args?: SelectSubset<T, bannerFindFirstArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bannerFindFirstOrThrowArgs>(args?: SelectSubset<T, bannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bannerFindManyArgs>(args?: SelectSubset<T, bannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {bannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends bannerCreateArgs>(args: SelectSubset<T, bannerCreateArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {bannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bannerCreateManyArgs>(args?: SelectSubset<T, bannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {bannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bannerCreateManyAndReturnArgs>(args?: SelectSubset<T, bannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {bannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends bannerDeleteArgs>(args: SelectSubset<T, bannerDeleteArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {bannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bannerUpdateArgs>(args: SelectSubset<T, bannerUpdateArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {bannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bannerDeleteManyArgs>(args?: SelectSubset<T, bannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bannerUpdateManyArgs>(args: SelectSubset<T, bannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {bannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bannerUpdateManyAndReturnArgs>(args: SelectSubset<T, bannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {bannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends bannerUpsertArgs>(args: SelectSubset<T, bannerUpsertArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends bannerCountArgs>(
      args?: Subset<T, bannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bannerGroupByArgs['orderBy'] }
        : { orderBy?: bannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banner model
   */
  readonly fields: bannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rom<T extends romsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, romsDefaultArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the banner model
   */
  interface bannerFieldRefs {
    readonly id: FieldRef<"banner", 'Int'>
    readonly title: FieldRef<"banner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * banner findUnique
   */
  export type bannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner findUniqueOrThrow
   */
  export type bannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner findFirst
   */
  export type bannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner findFirstOrThrow
   */
  export type bannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner findMany
   */
  export type bannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner create
   */
  export type bannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * The data needed to create a banner.
     */
    data: XOR<bannerCreateInput, bannerUncheckedCreateInput>
  }

  /**
   * banner createMany
   */
  export type bannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banners.
     */
    data: bannerCreateManyInput | bannerCreateManyInput[]
  }

  /**
   * banner createManyAndReturn
   */
  export type bannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * The data used to create many banners.
     */
    data: bannerCreateManyInput | bannerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * banner update
   */
  export type bannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * The data needed to update a banner.
     */
    data: XOR<bannerUpdateInput, bannerUncheckedUpdateInput>
    /**
     * Choose, which banner to update.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner updateMany
   */
  export type bannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banners.
     */
    data: XOR<bannerUpdateManyMutationInput, bannerUncheckedUpdateManyInput>
    /**
     * Filter which banners to update
     */
    where?: bannerWhereInput
    /**
     * Limit how many banners to update.
     */
    limit?: number
  }

  /**
   * banner updateManyAndReturn
   */
  export type bannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * The data used to update banners.
     */
    data: XOR<bannerUpdateManyMutationInput, bannerUncheckedUpdateManyInput>
    /**
     * Filter which banners to update
     */
    where?: bannerWhereInput
    /**
     * Limit how many banners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * banner upsert
   */
  export type bannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * The filter to search for the banner to update in case it exists.
     */
    where: bannerWhereUniqueInput
    /**
     * In case the banner found by the `where` argument doesn't exist, create a new banner with this data.
     */
    create: XOR<bannerCreateInput, bannerUncheckedCreateInput>
    /**
     * In case the banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bannerUpdateInput, bannerUncheckedUpdateInput>
  }

  /**
   * banner delete
   */
  export type bannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter which banner to delete.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner deleteMany
   */
  export type bannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banners to delete
     */
    where?: bannerWhereInput
    /**
     * Limit how many banners to delete.
     */
    limit?: number
  }

  /**
   * banner without action
   */
  export type bannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
  }


  /**
   * Model categorys
   */

  export type AggregateCategorys = {
    _count: CategorysCountAggregateOutputType | null
    _min: CategorysMinAggregateOutputType | null
    _max: CategorysMaxAggregateOutputType | null
  }

  export type CategorysMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategorysMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategorysCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategorysMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategorysMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategorysCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategorysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorys to aggregate.
     */
    where?: categorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorys to fetch.
     */
    orderBy?: categorysOrderByWithRelationInput | categorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorys
    **/
    _count?: true | CategorysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorysMaxAggregateInputType
  }

  export type GetCategorysAggregateType<T extends CategorysAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorys[P]>
      : GetScalarType<T[P], AggregateCategorys[P]>
  }




  export type categorysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorysWhereInput
    orderBy?: categorysOrderByWithAggregationInput | categorysOrderByWithAggregationInput[]
    by: CategorysScalarFieldEnum[] | CategorysScalarFieldEnum
    having?: categorysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorysCountAggregateInputType | true
    _min?: CategorysMinAggregateInputType
    _max?: CategorysMaxAggregateInputType
  }

  export type CategorysGroupByOutputType = {
    id: string
    name: string
    _count: CategorysCountAggregateOutputType | null
    _min: CategorysMinAggregateOutputType | null
    _max: CategorysMaxAggregateOutputType | null
  }

  type GetCategorysGroupByPayload<T extends categorysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorysGroupByOutputType[P]>
            : GetScalarType<T[P], CategorysGroupByOutputType[P]>
        }
      >
    >


  export type categorysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roms?: boolean | categorys$romsArgs<ExtArgs>
    _count?: boolean | CategorysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorys"]>

  export type categorysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categorys"]>

  export type categorysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categorys"]>

  export type categorysSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categorysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categorys"]>
  export type categorysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roms?: boolean | categorys$romsArgs<ExtArgs>
    _count?: boolean | CategorysCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categorysIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categorysIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categorysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorys"
    objects: {
      roms: Prisma.$romsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["categorys"]>
    composites: {}
  }

  type categorysGetPayload<S extends boolean | null | undefined | categorysDefaultArgs> = $Result.GetResult<Prisma.$categorysPayload, S>

  type categorysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categorysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorysCountAggregateInputType | true
    }

  export interface categorysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorys'], meta: { name: 'categorys' } }
    /**
     * Find zero or one Categorys that matches the filter.
     * @param {categorysFindUniqueArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categorysFindUniqueArgs>(args: SelectSubset<T, categorysFindUniqueArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categorysFindUniqueOrThrowArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categorysFindUniqueOrThrowArgs>(args: SelectSubset<T, categorysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorysFindFirstArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categorysFindFirstArgs>(args?: SelectSubset<T, categorysFindFirstArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorysFindFirstOrThrowArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categorysFindFirstOrThrowArgs>(args?: SelectSubset<T, categorysFindFirstOrThrowArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorys
     * const categorys = await prisma.categorys.findMany()
     * 
     * // Get first 10 Categorys
     * const categorys = await prisma.categorys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorysWithIdOnly = await prisma.categorys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categorysFindManyArgs>(args?: SelectSubset<T, categorysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorys.
     * @param {categorysCreateArgs} args - Arguments to create a Categorys.
     * @example
     * // Create one Categorys
     * const Categorys = await prisma.categorys.create({
     *   data: {
     *     // ... data to create a Categorys
     *   }
     * })
     * 
     */
    create<T extends categorysCreateArgs>(args: SelectSubset<T, categorysCreateArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorys.
     * @param {categorysCreateManyArgs} args - Arguments to create many Categorys.
     * @example
     * // Create many Categorys
     * const categorys = await prisma.categorys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categorysCreateManyArgs>(args?: SelectSubset<T, categorysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorys and returns the data saved in the database.
     * @param {categorysCreateManyAndReturnArgs} args - Arguments to create many Categorys.
     * @example
     * // Create many Categorys
     * const categorys = await prisma.categorys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorys and only return the `id`
     * const categorysWithIdOnly = await prisma.categorys.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categorysCreateManyAndReturnArgs>(args?: SelectSubset<T, categorysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorys.
     * @param {categorysDeleteArgs} args - Arguments to delete one Categorys.
     * @example
     * // Delete one Categorys
     * const Categorys = await prisma.categorys.delete({
     *   where: {
     *     // ... filter to delete one Categorys
     *   }
     * })
     * 
     */
    delete<T extends categorysDeleteArgs>(args: SelectSubset<T, categorysDeleteArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorys.
     * @param {categorysUpdateArgs} args - Arguments to update one Categorys.
     * @example
     * // Update one Categorys
     * const categorys = await prisma.categorys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categorysUpdateArgs>(args: SelectSubset<T, categorysUpdateArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorys.
     * @param {categorysDeleteManyArgs} args - Arguments to filter Categorys to delete.
     * @example
     * // Delete a few Categorys
     * const { count } = await prisma.categorys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categorysDeleteManyArgs>(args?: SelectSubset<T, categorysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorys
     * const categorys = await prisma.categorys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categorysUpdateManyArgs>(args: SelectSubset<T, categorysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorys and returns the data updated in the database.
     * @param {categorysUpdateManyAndReturnArgs} args - Arguments to update many Categorys.
     * @example
     * // Update many Categorys
     * const categorys = await prisma.categorys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorys and only return the `id`
     * const categorysWithIdOnly = await prisma.categorys.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categorysUpdateManyAndReturnArgs>(args: SelectSubset<T, categorysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorys.
     * @param {categorysUpsertArgs} args - Arguments to update or create a Categorys.
     * @example
     * // Update or create a Categorys
     * const categorys = await prisma.categorys.upsert({
     *   create: {
     *     // ... data to create a Categorys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorys we want to update
     *   }
     * })
     */
    upsert<T extends categorysUpsertArgs>(args: SelectSubset<T, categorysUpsertArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorysCountArgs} args - Arguments to filter Categorys to count.
     * @example
     * // Count the number of Categorys
     * const count = await prisma.categorys.count({
     *   where: {
     *     // ... the filter for the Categorys we want to count
     *   }
     * })
    **/
    count<T extends categorysCountArgs>(
      args?: Subset<T, categorysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorysAggregateArgs>(args: Subset<T, CategorysAggregateArgs>): Prisma.PrismaPromise<GetCategorysAggregateType<T>>

    /**
     * Group by Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categorysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categorysGroupByArgs['orderBy'] }
        : { orderBy?: categorysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categorysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorys model
   */
  readonly fields: categorysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categorysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roms<T extends categorys$romsArgs<ExtArgs> = {}>(args?: Subset<T, categorys$romsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorys model
   */
  interface categorysFieldRefs {
    readonly id: FieldRef<"categorys", 'String'>
    readonly name: FieldRef<"categorys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorys findUnique
   */
  export type categorysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * Filter, which categorys to fetch.
     */
    where: categorysWhereUniqueInput
  }

  /**
   * categorys findUniqueOrThrow
   */
  export type categorysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * Filter, which categorys to fetch.
     */
    where: categorysWhereUniqueInput
  }

  /**
   * categorys findFirst
   */
  export type categorysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * Filter, which categorys to fetch.
     */
    where?: categorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorys to fetch.
     */
    orderBy?: categorysOrderByWithRelationInput | categorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorys.
     */
    cursor?: categorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorys.
     */
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * categorys findFirstOrThrow
   */
  export type categorysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * Filter, which categorys to fetch.
     */
    where?: categorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorys to fetch.
     */
    orderBy?: categorysOrderByWithRelationInput | categorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorys.
     */
    cursor?: categorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorys.
     */
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * categorys findMany
   */
  export type categorysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * Filter, which categorys to fetch.
     */
    where?: categorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorys to fetch.
     */
    orderBy?: categorysOrderByWithRelationInput | categorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorys.
     */
    cursor?: categorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorys.
     */
    skip?: number
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * categorys create
   */
  export type categorysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * The data needed to create a categorys.
     */
    data: XOR<categorysCreateInput, categorysUncheckedCreateInput>
  }

  /**
   * categorys createMany
   */
  export type categorysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorys.
     */
    data: categorysCreateManyInput | categorysCreateManyInput[]
  }

  /**
   * categorys createManyAndReturn
   */
  export type categorysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * The data used to create many categorys.
     */
    data: categorysCreateManyInput | categorysCreateManyInput[]
  }

  /**
   * categorys update
   */
  export type categorysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * The data needed to update a categorys.
     */
    data: XOR<categorysUpdateInput, categorysUncheckedUpdateInput>
    /**
     * Choose, which categorys to update.
     */
    where: categorysWhereUniqueInput
  }

  /**
   * categorys updateMany
   */
  export type categorysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorys.
     */
    data: XOR<categorysUpdateManyMutationInput, categorysUncheckedUpdateManyInput>
    /**
     * Filter which categorys to update
     */
    where?: categorysWhereInput
    /**
     * Limit how many categorys to update.
     */
    limit?: number
  }

  /**
   * categorys updateManyAndReturn
   */
  export type categorysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * The data used to update categorys.
     */
    data: XOR<categorysUpdateManyMutationInput, categorysUncheckedUpdateManyInput>
    /**
     * Filter which categorys to update
     */
    where?: categorysWhereInput
    /**
     * Limit how many categorys to update.
     */
    limit?: number
  }

  /**
   * categorys upsert
   */
  export type categorysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * The filter to search for the categorys to update in case it exists.
     */
    where: categorysWhereUniqueInput
    /**
     * In case the categorys found by the `where` argument doesn't exist, create a new categorys with this data.
     */
    create: XOR<categorysCreateInput, categorysUncheckedCreateInput>
    /**
     * In case the categorys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categorysUpdateInput, categorysUncheckedUpdateInput>
  }

  /**
   * categorys delete
   */
  export type categorysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
    /**
     * Filter which categorys to delete.
     */
    where: categorysWhereUniqueInput
  }

  /**
   * categorys deleteMany
   */
  export type categorysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorys to delete
     */
    where?: categorysWhereInput
    /**
     * Limit how many categorys to delete.
     */
    limit?: number
  }

  /**
   * categorys.roms
   */
  export type categorys$romsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    where?: romsWhereInput
    orderBy?: romsOrderByWithRelationInput | romsOrderByWithRelationInput[]
    cursor?: romsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RomsScalarFieldEnum | RomsScalarFieldEnum[]
  }

  /**
   * categorys without action
   */
  export type categorysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorys
     */
    select?: categorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorys
     */
    omit?: categorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorysInclude<ExtArgs> | null
  }


  /**
   * Model roms
   */

  export type AggregateRoms = {
    _count: RomsCountAggregateOutputType | null
    _avg: RomsAvgAggregateOutputType | null
    _sum: RomsSumAggregateOutputType | null
    _min: RomsMinAggregateOutputType | null
    _max: RomsMaxAggregateOutputType | null
  }

  export type RomsAvgAggregateOutputType = {
    id: number | null
  }

  export type RomsSumAggregateOutputType = {
    id: number | null
  }

  export type RomsMinAggregateOutputType = {
    id: number | null
    title: string | null
    cover: string | null
    image: string | null
    language: string | null
    type: string | null
    source: string | null
    comment: string | null
    location: string | null
    size: string | null
    publisher: string | null
    url: string | null
  }

  export type RomsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    cover: string | null
    image: string | null
    language: string | null
    type: string | null
    source: string | null
    comment: string | null
    location: string | null
    size: string | null
    publisher: string | null
    url: string | null
  }

  export type RomsCountAggregateOutputType = {
    id: number
    title: number
    cover: number
    image: number
    language: number
    type: number
    source: number
    comment: number
    location: number
    size: number
    publisher: number
    url: number
    _all: number
  }


  export type RomsAvgAggregateInputType = {
    id?: true
  }

  export type RomsSumAggregateInputType = {
    id?: true
  }

  export type RomsMinAggregateInputType = {
    id?: true
    title?: true
    cover?: true
    image?: true
    language?: true
    type?: true
    source?: true
    comment?: true
    location?: true
    size?: true
    publisher?: true
    url?: true
  }

  export type RomsMaxAggregateInputType = {
    id?: true
    title?: true
    cover?: true
    image?: true
    language?: true
    type?: true
    source?: true
    comment?: true
    location?: true
    size?: true
    publisher?: true
    url?: true
  }

  export type RomsCountAggregateInputType = {
    id?: true
    title?: true
    cover?: true
    image?: true
    language?: true
    type?: true
    source?: true
    comment?: true
    location?: true
    size?: true
    publisher?: true
    url?: true
    _all?: true
  }

  export type RomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roms to aggregate.
     */
    where?: romsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roms to fetch.
     */
    orderBy?: romsOrderByWithRelationInput | romsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: romsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roms
    **/
    _count?: true | RomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RomsMaxAggregateInputType
  }

  export type GetRomsAggregateType<T extends RomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRoms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoms[P]>
      : GetScalarType<T[P], AggregateRoms[P]>
  }




  export type romsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: romsWhereInput
    orderBy?: romsOrderByWithAggregationInput | romsOrderByWithAggregationInput[]
    by: RomsScalarFieldEnum[] | RomsScalarFieldEnum
    having?: romsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RomsCountAggregateInputType | true
    _avg?: RomsAvgAggregateInputType
    _sum?: RomsSumAggregateInputType
    _min?: RomsMinAggregateInputType
    _max?: RomsMaxAggregateInputType
  }

  export type RomsGroupByOutputType = {
    id: number
    title: string
    cover: string
    image: string
    language: string
    type: string
    source: string
    comment: string
    location: string
    size: string
    publisher: string
    url: string
    _count: RomsCountAggregateOutputType | null
    _avg: RomsAvgAggregateOutputType | null
    _sum: RomsSumAggregateOutputType | null
    _min: RomsMinAggregateOutputType | null
    _max: RomsMaxAggregateOutputType | null
  }

  type GetRomsGroupByPayload<T extends romsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RomsGroupByOutputType[P]>
            : GetScalarType<T[P], RomsGroupByOutputType[P]>
        }
      >
    >


  export type romsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
    image?: boolean
    language?: boolean
    type?: boolean
    source?: boolean
    comment?: boolean
    location?: boolean
    size?: boolean
    publisher?: boolean
    url?: boolean
    Category?: boolean | categorysDefaultArgs<ExtArgs>
    banners?: boolean | roms$bannersArgs<ExtArgs>
    _count?: boolean | RomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roms"]>

  export type romsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
    image?: boolean
    language?: boolean
    type?: boolean
    source?: boolean
    comment?: boolean
    location?: boolean
    size?: boolean
    publisher?: boolean
    url?: boolean
    Category?: boolean | categorysDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roms"]>

  export type romsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
    image?: boolean
    language?: boolean
    type?: boolean
    source?: boolean
    comment?: boolean
    location?: boolean
    size?: boolean
    publisher?: boolean
    url?: boolean
    Category?: boolean | categorysDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roms"]>

  export type romsSelectScalar = {
    id?: boolean
    title?: boolean
    cover?: boolean
    image?: boolean
    language?: boolean
    type?: boolean
    source?: boolean
    comment?: boolean
    location?: boolean
    size?: boolean
    publisher?: boolean
    url?: boolean
  }

  export type romsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "cover" | "image" | "language" | "type" | "source" | "comment" | "location" | "size" | "publisher" | "url", ExtArgs["result"]["roms"]>
  export type romsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | categorysDefaultArgs<ExtArgs>
    banners?: boolean | roms$bannersArgs<ExtArgs>
    _count?: boolean | RomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type romsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | categorysDefaultArgs<ExtArgs>
  }
  export type romsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | categorysDefaultArgs<ExtArgs>
  }

  export type $romsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roms"
    objects: {
      Category: Prisma.$categorysPayload<ExtArgs>
      banners: Prisma.$bannerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      cover: string
      image: string
      language: string
      type: string
      source: string
      comment: string
      location: string
      size: string
      publisher: string
      url: string
    }, ExtArgs["result"]["roms"]>
    composites: {}
  }

  type romsGetPayload<S extends boolean | null | undefined | romsDefaultArgs> = $Result.GetResult<Prisma.$romsPayload, S>

  type romsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<romsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RomsCountAggregateInputType | true
    }

  export interface romsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roms'], meta: { name: 'roms' } }
    /**
     * Find zero or one Roms that matches the filter.
     * @param {romsFindUniqueArgs} args - Arguments to find a Roms
     * @example
     * // Get one Roms
     * const roms = await prisma.roms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends romsFindUniqueArgs>(args: SelectSubset<T, romsFindUniqueArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {romsFindUniqueOrThrowArgs} args - Arguments to find a Roms
     * @example
     * // Get one Roms
     * const roms = await prisma.roms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends romsFindUniqueOrThrowArgs>(args: SelectSubset<T, romsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {romsFindFirstArgs} args - Arguments to find a Roms
     * @example
     * // Get one Roms
     * const roms = await prisma.roms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends romsFindFirstArgs>(args?: SelectSubset<T, romsFindFirstArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {romsFindFirstOrThrowArgs} args - Arguments to find a Roms
     * @example
     * // Get one Roms
     * const roms = await prisma.roms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends romsFindFirstOrThrowArgs>(args?: SelectSubset<T, romsFindFirstOrThrowArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {romsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roms
     * const roms = await prisma.roms.findMany()
     * 
     * // Get first 10 Roms
     * const roms = await prisma.roms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const romsWithIdOnly = await prisma.roms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends romsFindManyArgs>(args?: SelectSubset<T, romsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roms.
     * @param {romsCreateArgs} args - Arguments to create a Roms.
     * @example
     * // Create one Roms
     * const Roms = await prisma.roms.create({
     *   data: {
     *     // ... data to create a Roms
     *   }
     * })
     * 
     */
    create<T extends romsCreateArgs>(args: SelectSubset<T, romsCreateArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roms.
     * @param {romsCreateManyArgs} args - Arguments to create many Roms.
     * @example
     * // Create many Roms
     * const roms = await prisma.roms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends romsCreateManyArgs>(args?: SelectSubset<T, romsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roms and returns the data saved in the database.
     * @param {romsCreateManyAndReturnArgs} args - Arguments to create many Roms.
     * @example
     * // Create many Roms
     * const roms = await prisma.roms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roms and only return the `id`
     * const romsWithIdOnly = await prisma.roms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends romsCreateManyAndReturnArgs>(args?: SelectSubset<T, romsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roms.
     * @param {romsDeleteArgs} args - Arguments to delete one Roms.
     * @example
     * // Delete one Roms
     * const Roms = await prisma.roms.delete({
     *   where: {
     *     // ... filter to delete one Roms
     *   }
     * })
     * 
     */
    delete<T extends romsDeleteArgs>(args: SelectSubset<T, romsDeleteArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roms.
     * @param {romsUpdateArgs} args - Arguments to update one Roms.
     * @example
     * // Update one Roms
     * const roms = await prisma.roms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends romsUpdateArgs>(args: SelectSubset<T, romsUpdateArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roms.
     * @param {romsDeleteManyArgs} args - Arguments to filter Roms to delete.
     * @example
     * // Delete a few Roms
     * const { count } = await prisma.roms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends romsDeleteManyArgs>(args?: SelectSubset<T, romsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {romsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roms
     * const roms = await prisma.roms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends romsUpdateManyArgs>(args: SelectSubset<T, romsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roms and returns the data updated in the database.
     * @param {romsUpdateManyAndReturnArgs} args - Arguments to update many Roms.
     * @example
     * // Update many Roms
     * const roms = await prisma.roms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roms and only return the `id`
     * const romsWithIdOnly = await prisma.roms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends romsUpdateManyAndReturnArgs>(args: SelectSubset<T, romsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roms.
     * @param {romsUpsertArgs} args - Arguments to update or create a Roms.
     * @example
     * // Update or create a Roms
     * const roms = await prisma.roms.upsert({
     *   create: {
     *     // ... data to create a Roms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roms we want to update
     *   }
     * })
     */
    upsert<T extends romsUpsertArgs>(args: SelectSubset<T, romsUpsertArgs<ExtArgs>>): Prisma__romsClient<$Result.GetResult<Prisma.$romsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {romsCountArgs} args - Arguments to filter Roms to count.
     * @example
     * // Count the number of Roms
     * const count = await prisma.roms.count({
     *   where: {
     *     // ... the filter for the Roms we want to count
     *   }
     * })
    **/
    count<T extends romsCountArgs>(
      args?: Subset<T, romsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RomsAggregateArgs>(args: Subset<T, RomsAggregateArgs>): Prisma.PrismaPromise<GetRomsAggregateType<T>>

    /**
     * Group by Roms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {romsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends romsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: romsGroupByArgs['orderBy'] }
        : { orderBy?: romsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, romsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roms model
   */
  readonly fields: romsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__romsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends categorysDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categorysDefaultArgs<ExtArgs>>): Prisma__categorysClient<$Result.GetResult<Prisma.$categorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    banners<T extends roms$bannersArgs<ExtArgs> = {}>(args?: Subset<T, roms$bannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roms model
   */
  interface romsFieldRefs {
    readonly id: FieldRef<"roms", 'Int'>
    readonly title: FieldRef<"roms", 'String'>
    readonly cover: FieldRef<"roms", 'String'>
    readonly image: FieldRef<"roms", 'String'>
    readonly language: FieldRef<"roms", 'String'>
    readonly type: FieldRef<"roms", 'String'>
    readonly source: FieldRef<"roms", 'String'>
    readonly comment: FieldRef<"roms", 'String'>
    readonly location: FieldRef<"roms", 'String'>
    readonly size: FieldRef<"roms", 'String'>
    readonly publisher: FieldRef<"roms", 'String'>
    readonly url: FieldRef<"roms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roms findUnique
   */
  export type romsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * Filter, which roms to fetch.
     */
    where: romsWhereUniqueInput
  }

  /**
   * roms findUniqueOrThrow
   */
  export type romsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * Filter, which roms to fetch.
     */
    where: romsWhereUniqueInput
  }

  /**
   * roms findFirst
   */
  export type romsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * Filter, which roms to fetch.
     */
    where?: romsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roms to fetch.
     */
    orderBy?: romsOrderByWithRelationInput | romsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roms.
     */
    cursor?: romsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roms.
     */
    distinct?: RomsScalarFieldEnum | RomsScalarFieldEnum[]
  }

  /**
   * roms findFirstOrThrow
   */
  export type romsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * Filter, which roms to fetch.
     */
    where?: romsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roms to fetch.
     */
    orderBy?: romsOrderByWithRelationInput | romsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roms.
     */
    cursor?: romsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roms.
     */
    distinct?: RomsScalarFieldEnum | RomsScalarFieldEnum[]
  }

  /**
   * roms findMany
   */
  export type romsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * Filter, which roms to fetch.
     */
    where?: romsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roms to fetch.
     */
    orderBy?: romsOrderByWithRelationInput | romsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roms.
     */
    cursor?: romsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roms.
     */
    skip?: number
    distinct?: RomsScalarFieldEnum | RomsScalarFieldEnum[]
  }

  /**
   * roms create
   */
  export type romsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * The data needed to create a roms.
     */
    data: XOR<romsCreateInput, romsUncheckedCreateInput>
  }

  /**
   * roms createMany
   */
  export type romsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roms.
     */
    data: romsCreateManyInput | romsCreateManyInput[]
  }

  /**
   * roms createManyAndReturn
   */
  export type romsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * The data used to create many roms.
     */
    data: romsCreateManyInput | romsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * roms update
   */
  export type romsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * The data needed to update a roms.
     */
    data: XOR<romsUpdateInput, romsUncheckedUpdateInput>
    /**
     * Choose, which roms to update.
     */
    where: romsWhereUniqueInput
  }

  /**
   * roms updateMany
   */
  export type romsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roms.
     */
    data: XOR<romsUpdateManyMutationInput, romsUncheckedUpdateManyInput>
    /**
     * Filter which roms to update
     */
    where?: romsWhereInput
    /**
     * Limit how many roms to update.
     */
    limit?: number
  }

  /**
   * roms updateManyAndReturn
   */
  export type romsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * The data used to update roms.
     */
    data: XOR<romsUpdateManyMutationInput, romsUncheckedUpdateManyInput>
    /**
     * Filter which roms to update
     */
    where?: romsWhereInput
    /**
     * Limit how many roms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * roms upsert
   */
  export type romsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * The filter to search for the roms to update in case it exists.
     */
    where: romsWhereUniqueInput
    /**
     * In case the roms found by the `where` argument doesn't exist, create a new roms with this data.
     */
    create: XOR<romsCreateInput, romsUncheckedCreateInput>
    /**
     * In case the roms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<romsUpdateInput, romsUncheckedUpdateInput>
  }

  /**
   * roms delete
   */
  export type romsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
    /**
     * Filter which roms to delete.
     */
    where: romsWhereUniqueInput
  }

  /**
   * roms deleteMany
   */
  export type romsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roms to delete
     */
    where?: romsWhereInput
    /**
     * Limit how many roms to delete.
     */
    limit?: number
  }

  /**
   * roms.banners
   */
  export type roms$bannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    where?: bannerWhereInput
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    cursor?: bannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * roms without action
   */
  export type romsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roms
     */
    select?: romsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roms
     */
    omit?: romsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: romsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const CategorysScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategorysScalarFieldEnum = (typeof CategorysScalarFieldEnum)[keyof typeof CategorysScalarFieldEnum]


  export const RomsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    cover: 'cover',
    image: 'image',
    language: 'language',
    type: 'type',
    source: 'source',
    comment: 'comment',
    location: 'location',
    size: 'size',
    publisher: 'publisher',
    url: 'url'
  };

  export type RomsScalarFieldEnum = (typeof RomsScalarFieldEnum)[keyof typeof RomsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type bannerWhereInput = {
    AND?: bannerWhereInput | bannerWhereInput[]
    OR?: bannerWhereInput[]
    NOT?: bannerWhereInput | bannerWhereInput[]
    id?: IntFilter<"banner"> | number
    title?: StringNullableFilter<"banner"> | string | null
    rom?: XOR<RomsScalarRelationFilter, romsWhereInput>
  }

  export type bannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    rom?: romsOrderByWithRelationInput
  }

  export type bannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bannerWhereInput | bannerWhereInput[]
    OR?: bannerWhereInput[]
    NOT?: bannerWhereInput | bannerWhereInput[]
    title?: StringNullableFilter<"banner"> | string | null
    rom?: XOR<RomsScalarRelationFilter, romsWhereInput>
  }, "id">

  export type bannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    _count?: bannerCountOrderByAggregateInput
    _avg?: bannerAvgOrderByAggregateInput
    _max?: bannerMaxOrderByAggregateInput
    _min?: bannerMinOrderByAggregateInput
    _sum?: bannerSumOrderByAggregateInput
  }

  export type bannerScalarWhereWithAggregatesInput = {
    AND?: bannerScalarWhereWithAggregatesInput | bannerScalarWhereWithAggregatesInput[]
    OR?: bannerScalarWhereWithAggregatesInput[]
    NOT?: bannerScalarWhereWithAggregatesInput | bannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"banner"> | number
    title?: StringNullableWithAggregatesFilter<"banner"> | string | null
  }

  export type categorysWhereInput = {
    AND?: categorysWhereInput | categorysWhereInput[]
    OR?: categorysWhereInput[]
    NOT?: categorysWhereInput | categorysWhereInput[]
    id?: StringFilter<"categorys"> | string
    name?: StringFilter<"categorys"> | string
    roms?: RomsListRelationFilter
  }

  export type categorysOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    roms?: romsOrderByRelationAggregateInput
  }

  export type categorysWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: categorysWhereInput | categorysWhereInput[]
    OR?: categorysWhereInput[]
    NOT?: categorysWhereInput | categorysWhereInput[]
    name?: StringFilter<"categorys"> | string
    roms?: RomsListRelationFilter
  }, "id">

  export type categorysOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categorysCountOrderByAggregateInput
    _max?: categorysMaxOrderByAggregateInput
    _min?: categorysMinOrderByAggregateInput
  }

  export type categorysScalarWhereWithAggregatesInput = {
    AND?: categorysScalarWhereWithAggregatesInput | categorysScalarWhereWithAggregatesInput[]
    OR?: categorysScalarWhereWithAggregatesInput[]
    NOT?: categorysScalarWhereWithAggregatesInput | categorysScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"categorys"> | string
    name?: StringWithAggregatesFilter<"categorys"> | string
  }

  export type romsWhereInput = {
    AND?: romsWhereInput | romsWhereInput[]
    OR?: romsWhereInput[]
    NOT?: romsWhereInput | romsWhereInput[]
    id?: IntFilter<"roms"> | number
    title?: StringFilter<"roms"> | string
    cover?: StringFilter<"roms"> | string
    image?: StringFilter<"roms"> | string
    language?: StringFilter<"roms"> | string
    type?: StringFilter<"roms"> | string
    source?: StringFilter<"roms"> | string
    comment?: StringFilter<"roms"> | string
    location?: StringFilter<"roms"> | string
    size?: StringFilter<"roms"> | string
    publisher?: StringFilter<"roms"> | string
    url?: StringFilter<"roms"> | string
    Category?: XOR<CategorysScalarRelationFilter, categorysWhereInput>
    banners?: BannerListRelationFilter
  }

  export type romsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    image?: SortOrder
    language?: SortOrder
    type?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    location?: SortOrder
    size?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
    Category?: categorysOrderByWithRelationInput
    banners?: bannerOrderByRelationAggregateInput
  }

  export type romsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: romsWhereInput | romsWhereInput[]
    OR?: romsWhereInput[]
    NOT?: romsWhereInput | romsWhereInput[]
    title?: StringFilter<"roms"> | string
    cover?: StringFilter<"roms"> | string
    image?: StringFilter<"roms"> | string
    language?: StringFilter<"roms"> | string
    type?: StringFilter<"roms"> | string
    source?: StringFilter<"roms"> | string
    comment?: StringFilter<"roms"> | string
    location?: StringFilter<"roms"> | string
    size?: StringFilter<"roms"> | string
    publisher?: StringFilter<"roms"> | string
    url?: StringFilter<"roms"> | string
    Category?: XOR<CategorysScalarRelationFilter, categorysWhereInput>
    banners?: BannerListRelationFilter
  }, "id">

  export type romsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    image?: SortOrder
    language?: SortOrder
    type?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    location?: SortOrder
    size?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
    _count?: romsCountOrderByAggregateInput
    _avg?: romsAvgOrderByAggregateInput
    _max?: romsMaxOrderByAggregateInput
    _min?: romsMinOrderByAggregateInput
    _sum?: romsSumOrderByAggregateInput
  }

  export type romsScalarWhereWithAggregatesInput = {
    AND?: romsScalarWhereWithAggregatesInput | romsScalarWhereWithAggregatesInput[]
    OR?: romsScalarWhereWithAggregatesInput[]
    NOT?: romsScalarWhereWithAggregatesInput | romsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roms"> | number
    title?: StringWithAggregatesFilter<"roms"> | string
    cover?: StringWithAggregatesFilter<"roms"> | string
    image?: StringWithAggregatesFilter<"roms"> | string
    language?: StringWithAggregatesFilter<"roms"> | string
    type?: StringWithAggregatesFilter<"roms"> | string
    source?: StringWithAggregatesFilter<"roms"> | string
    comment?: StringWithAggregatesFilter<"roms"> | string
    location?: StringWithAggregatesFilter<"roms"> | string
    size?: StringWithAggregatesFilter<"roms"> | string
    publisher?: StringWithAggregatesFilter<"roms"> | string
    url?: StringWithAggregatesFilter<"roms"> | string
  }

  export type bannerCreateInput = {
    title?: string | null
    rom?: romsCreateNestedOneWithoutBannersInput
  }

  export type bannerUncheckedCreateInput = {
    id?: number
    title?: string | null
  }

  export type bannerUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rom?: romsUpdateOneRequiredWithoutBannersNestedInput
  }

  export type bannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bannerCreateManyInput = {
    id?: number
    title?: string | null
  }

  export type bannerUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categorysCreateInput = {
    id: string
    name: string
    roms?: romsCreateNestedManyWithoutCategoryInput
  }

  export type categorysUncheckedCreateInput = {
    id: string
    name: string
    roms?: romsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categorysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roms?: romsUpdateManyWithoutCategoryNestedInput
  }

  export type categorysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roms?: romsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categorysCreateManyInput = {
    id: string
    name: string
  }

  export type categorysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categorysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type romsCreateInput = {
    title?: string
    cover?: string
    image?: string
    language?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
    Category?: categorysCreateNestedOneWithoutRomsInput
    banners?: bannerCreateNestedManyWithoutRomInput
  }

  export type romsUncheckedCreateInput = {
    id?: number
    title?: string
    cover?: string
    image?: string
    language?: string
    type?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
    banners?: bannerUncheckedCreateNestedManyWithoutRomInput
  }

  export type romsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    Category?: categorysUpdateOneRequiredWithoutRomsNestedInput
    banners?: bannerUpdateManyWithoutRomNestedInput
  }

  export type romsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    banners?: bannerUncheckedUpdateManyWithoutRomNestedInput
  }

  export type romsCreateManyInput = {
    id?: number
    title?: string
    cover?: string
    image?: string
    language?: string
    type?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
  }

  export type romsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type romsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RomsScalarRelationFilter = {
    is?: romsWhereInput
    isNot?: romsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type bannerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type bannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type bannerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RomsListRelationFilter = {
    every?: romsWhereInput
    some?: romsWhereInput
    none?: romsWhereInput
  }

  export type romsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categorysCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorysMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorysMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CategorysScalarRelationFilter = {
    is?: categorysWhereInput
    isNot?: categorysWhereInput
  }

  export type BannerListRelationFilter = {
    every?: bannerWhereInput
    some?: bannerWhereInput
    none?: bannerWhereInput
  }

  export type bannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type romsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    image?: SortOrder
    language?: SortOrder
    type?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    location?: SortOrder
    size?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
  }

  export type romsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type romsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    image?: SortOrder
    language?: SortOrder
    type?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    location?: SortOrder
    size?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
  }

  export type romsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
    image?: SortOrder
    language?: SortOrder
    type?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    location?: SortOrder
    size?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
  }

  export type romsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type romsCreateNestedOneWithoutBannersInput = {
    create?: XOR<romsCreateWithoutBannersInput, romsUncheckedCreateWithoutBannersInput>
    connectOrCreate?: romsCreateOrConnectWithoutBannersInput
    connect?: romsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type romsUpdateOneRequiredWithoutBannersNestedInput = {
    create?: XOR<romsCreateWithoutBannersInput, romsUncheckedCreateWithoutBannersInput>
    connectOrCreate?: romsCreateOrConnectWithoutBannersInput
    upsert?: romsUpsertWithoutBannersInput
    connect?: romsWhereUniqueInput
    update?: XOR<XOR<romsUpdateToOneWithWhereWithoutBannersInput, romsUpdateWithoutBannersInput>, romsUncheckedUpdateWithoutBannersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type romsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<romsCreateWithoutCategoryInput, romsUncheckedCreateWithoutCategoryInput> | romsCreateWithoutCategoryInput[] | romsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: romsCreateOrConnectWithoutCategoryInput | romsCreateOrConnectWithoutCategoryInput[]
    createMany?: romsCreateManyCategoryInputEnvelope
    connect?: romsWhereUniqueInput | romsWhereUniqueInput[]
  }

  export type romsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<romsCreateWithoutCategoryInput, romsUncheckedCreateWithoutCategoryInput> | romsCreateWithoutCategoryInput[] | romsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: romsCreateOrConnectWithoutCategoryInput | romsCreateOrConnectWithoutCategoryInput[]
    createMany?: romsCreateManyCategoryInputEnvelope
    connect?: romsWhereUniqueInput | romsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type romsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<romsCreateWithoutCategoryInput, romsUncheckedCreateWithoutCategoryInput> | romsCreateWithoutCategoryInput[] | romsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: romsCreateOrConnectWithoutCategoryInput | romsCreateOrConnectWithoutCategoryInput[]
    upsert?: romsUpsertWithWhereUniqueWithoutCategoryInput | romsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: romsCreateManyCategoryInputEnvelope
    set?: romsWhereUniqueInput | romsWhereUniqueInput[]
    disconnect?: romsWhereUniqueInput | romsWhereUniqueInput[]
    delete?: romsWhereUniqueInput | romsWhereUniqueInput[]
    connect?: romsWhereUniqueInput | romsWhereUniqueInput[]
    update?: romsUpdateWithWhereUniqueWithoutCategoryInput | romsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: romsUpdateManyWithWhereWithoutCategoryInput | romsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: romsScalarWhereInput | romsScalarWhereInput[]
  }

  export type romsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<romsCreateWithoutCategoryInput, romsUncheckedCreateWithoutCategoryInput> | romsCreateWithoutCategoryInput[] | romsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: romsCreateOrConnectWithoutCategoryInput | romsCreateOrConnectWithoutCategoryInput[]
    upsert?: romsUpsertWithWhereUniqueWithoutCategoryInput | romsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: romsCreateManyCategoryInputEnvelope
    set?: romsWhereUniqueInput | romsWhereUniqueInput[]
    disconnect?: romsWhereUniqueInput | romsWhereUniqueInput[]
    delete?: romsWhereUniqueInput | romsWhereUniqueInput[]
    connect?: romsWhereUniqueInput | romsWhereUniqueInput[]
    update?: romsUpdateWithWhereUniqueWithoutCategoryInput | romsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: romsUpdateManyWithWhereWithoutCategoryInput | romsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: romsScalarWhereInput | romsScalarWhereInput[]
  }

  export type categorysCreateNestedOneWithoutRomsInput = {
    create?: XOR<categorysCreateWithoutRomsInput, categorysUncheckedCreateWithoutRomsInput>
    connectOrCreate?: categorysCreateOrConnectWithoutRomsInput
    connect?: categorysWhereUniqueInput
  }

  export type bannerCreateNestedManyWithoutRomInput = {
    create?: XOR<bannerCreateWithoutRomInput, bannerUncheckedCreateWithoutRomInput> | bannerCreateWithoutRomInput[] | bannerUncheckedCreateWithoutRomInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutRomInput | bannerCreateOrConnectWithoutRomInput[]
    createMany?: bannerCreateManyRomInputEnvelope
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
  }

  export type bannerUncheckedCreateNestedManyWithoutRomInput = {
    create?: XOR<bannerCreateWithoutRomInput, bannerUncheckedCreateWithoutRomInput> | bannerCreateWithoutRomInput[] | bannerUncheckedCreateWithoutRomInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutRomInput | bannerCreateOrConnectWithoutRomInput[]
    createMany?: bannerCreateManyRomInputEnvelope
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
  }

  export type categorysUpdateOneRequiredWithoutRomsNestedInput = {
    create?: XOR<categorysCreateWithoutRomsInput, categorysUncheckedCreateWithoutRomsInput>
    connectOrCreate?: categorysCreateOrConnectWithoutRomsInput
    upsert?: categorysUpsertWithoutRomsInput
    connect?: categorysWhereUniqueInput
    update?: XOR<XOR<categorysUpdateToOneWithWhereWithoutRomsInput, categorysUpdateWithoutRomsInput>, categorysUncheckedUpdateWithoutRomsInput>
  }

  export type bannerUpdateManyWithoutRomNestedInput = {
    create?: XOR<bannerCreateWithoutRomInput, bannerUncheckedCreateWithoutRomInput> | bannerCreateWithoutRomInput[] | bannerUncheckedCreateWithoutRomInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutRomInput | bannerCreateOrConnectWithoutRomInput[]
    upsert?: bannerUpsertWithWhereUniqueWithoutRomInput | bannerUpsertWithWhereUniqueWithoutRomInput[]
    createMany?: bannerCreateManyRomInputEnvelope
    set?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    disconnect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    delete?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    update?: bannerUpdateWithWhereUniqueWithoutRomInput | bannerUpdateWithWhereUniqueWithoutRomInput[]
    updateMany?: bannerUpdateManyWithWhereWithoutRomInput | bannerUpdateManyWithWhereWithoutRomInput[]
    deleteMany?: bannerScalarWhereInput | bannerScalarWhereInput[]
  }

  export type bannerUncheckedUpdateManyWithoutRomNestedInput = {
    create?: XOR<bannerCreateWithoutRomInput, bannerUncheckedCreateWithoutRomInput> | bannerCreateWithoutRomInput[] | bannerUncheckedCreateWithoutRomInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutRomInput | bannerCreateOrConnectWithoutRomInput[]
    upsert?: bannerUpsertWithWhereUniqueWithoutRomInput | bannerUpsertWithWhereUniqueWithoutRomInput[]
    createMany?: bannerCreateManyRomInputEnvelope
    set?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    disconnect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    delete?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    update?: bannerUpdateWithWhereUniqueWithoutRomInput | bannerUpdateWithWhereUniqueWithoutRomInput[]
    updateMany?: bannerUpdateManyWithWhereWithoutRomInput | bannerUpdateManyWithWhereWithoutRomInput[]
    deleteMany?: bannerScalarWhereInput | bannerScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type romsCreateWithoutBannersInput = {
    title?: string
    cover?: string
    image?: string
    language?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
    Category?: categorysCreateNestedOneWithoutRomsInput
  }

  export type romsUncheckedCreateWithoutBannersInput = {
    id?: number
    title?: string
    cover?: string
    image?: string
    language?: string
    type?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
  }

  export type romsCreateOrConnectWithoutBannersInput = {
    where: romsWhereUniqueInput
    create: XOR<romsCreateWithoutBannersInput, romsUncheckedCreateWithoutBannersInput>
  }

  export type romsUpsertWithoutBannersInput = {
    update: XOR<romsUpdateWithoutBannersInput, romsUncheckedUpdateWithoutBannersInput>
    create: XOR<romsCreateWithoutBannersInput, romsUncheckedCreateWithoutBannersInput>
    where?: romsWhereInput
  }

  export type romsUpdateToOneWithWhereWithoutBannersInput = {
    where?: romsWhereInput
    data: XOR<romsUpdateWithoutBannersInput, romsUncheckedUpdateWithoutBannersInput>
  }

  export type romsUpdateWithoutBannersInput = {
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    Category?: categorysUpdateOneRequiredWithoutRomsNestedInput
  }

  export type romsUncheckedUpdateWithoutBannersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type romsCreateWithoutCategoryInput = {
    title?: string
    cover?: string
    image?: string
    language?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
    banners?: bannerCreateNestedManyWithoutRomInput
  }

  export type romsUncheckedCreateWithoutCategoryInput = {
    id?: number
    title?: string
    cover?: string
    image?: string
    language?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
    banners?: bannerUncheckedCreateNestedManyWithoutRomInput
  }

  export type romsCreateOrConnectWithoutCategoryInput = {
    where: romsWhereUniqueInput
    create: XOR<romsCreateWithoutCategoryInput, romsUncheckedCreateWithoutCategoryInput>
  }

  export type romsCreateManyCategoryInputEnvelope = {
    data: romsCreateManyCategoryInput | romsCreateManyCategoryInput[]
  }

  export type romsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: romsWhereUniqueInput
    update: XOR<romsUpdateWithoutCategoryInput, romsUncheckedUpdateWithoutCategoryInput>
    create: XOR<romsCreateWithoutCategoryInput, romsUncheckedCreateWithoutCategoryInput>
  }

  export type romsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: romsWhereUniqueInput
    data: XOR<romsUpdateWithoutCategoryInput, romsUncheckedUpdateWithoutCategoryInput>
  }

  export type romsUpdateManyWithWhereWithoutCategoryInput = {
    where: romsScalarWhereInput
    data: XOR<romsUpdateManyMutationInput, romsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type romsScalarWhereInput = {
    AND?: romsScalarWhereInput | romsScalarWhereInput[]
    OR?: romsScalarWhereInput[]
    NOT?: romsScalarWhereInput | romsScalarWhereInput[]
    id?: IntFilter<"roms"> | number
    title?: StringFilter<"roms"> | string
    cover?: StringFilter<"roms"> | string
    image?: StringFilter<"roms"> | string
    language?: StringFilter<"roms"> | string
    type?: StringFilter<"roms"> | string
    source?: StringFilter<"roms"> | string
    comment?: StringFilter<"roms"> | string
    location?: StringFilter<"roms"> | string
    size?: StringFilter<"roms"> | string
    publisher?: StringFilter<"roms"> | string
    url?: StringFilter<"roms"> | string
  }

  export type categorysCreateWithoutRomsInput = {
    id: string
    name: string
  }

  export type categorysUncheckedCreateWithoutRomsInput = {
    id: string
    name: string
  }

  export type categorysCreateOrConnectWithoutRomsInput = {
    where: categorysWhereUniqueInput
    create: XOR<categorysCreateWithoutRomsInput, categorysUncheckedCreateWithoutRomsInput>
  }

  export type bannerCreateWithoutRomInput = {
    title?: string | null
  }

  export type bannerUncheckedCreateWithoutRomInput = {
    title?: string | null
  }

  export type bannerCreateOrConnectWithoutRomInput = {
    where: bannerWhereUniqueInput
    create: XOR<bannerCreateWithoutRomInput, bannerUncheckedCreateWithoutRomInput>
  }

  export type bannerCreateManyRomInputEnvelope = {
    data: bannerCreateManyRomInput | bannerCreateManyRomInput[]
  }

  export type categorysUpsertWithoutRomsInput = {
    update: XOR<categorysUpdateWithoutRomsInput, categorysUncheckedUpdateWithoutRomsInput>
    create: XOR<categorysCreateWithoutRomsInput, categorysUncheckedCreateWithoutRomsInput>
    where?: categorysWhereInput
  }

  export type categorysUpdateToOneWithWhereWithoutRomsInput = {
    where?: categorysWhereInput
    data: XOR<categorysUpdateWithoutRomsInput, categorysUncheckedUpdateWithoutRomsInput>
  }

  export type categorysUpdateWithoutRomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categorysUncheckedUpdateWithoutRomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type bannerUpsertWithWhereUniqueWithoutRomInput = {
    where: bannerWhereUniqueInput
    update: XOR<bannerUpdateWithoutRomInput, bannerUncheckedUpdateWithoutRomInput>
    create: XOR<bannerCreateWithoutRomInput, bannerUncheckedCreateWithoutRomInput>
  }

  export type bannerUpdateWithWhereUniqueWithoutRomInput = {
    where: bannerWhereUniqueInput
    data: XOR<bannerUpdateWithoutRomInput, bannerUncheckedUpdateWithoutRomInput>
  }

  export type bannerUpdateManyWithWhereWithoutRomInput = {
    where: bannerScalarWhereInput
    data: XOR<bannerUpdateManyMutationInput, bannerUncheckedUpdateManyWithoutRomInput>
  }

  export type bannerScalarWhereInput = {
    AND?: bannerScalarWhereInput | bannerScalarWhereInput[]
    OR?: bannerScalarWhereInput[]
    NOT?: bannerScalarWhereInput | bannerScalarWhereInput[]
    id?: IntFilter<"banner"> | number
    title?: StringNullableFilter<"banner"> | string | null
  }

  export type romsCreateManyCategoryInput = {
    id?: number
    title?: string
    cover?: string
    image?: string
    language?: string
    source?: string
    comment?: string
    location?: string
    size?: string
    publisher?: string
    url?: string
  }

  export type romsUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    banners?: bannerUpdateManyWithoutRomNestedInput
  }

  export type romsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    banners?: bannerUncheckedUpdateManyWithoutRomNestedInput
  }

  export type romsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type bannerCreateManyRomInput = {
    title?: string | null
  }

  export type bannerUpdateWithoutRomInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bannerUncheckedUpdateWithoutRomInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bannerUncheckedUpdateManyWithoutRomInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}