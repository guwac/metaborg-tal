module analysis/types

imports 
  include/TAL

signatures

  IntTy   : Type
  StringTy: Type
  BoolTy  : Type
  
type rules

  NumVal(_): IntTy()
  
  StringVal(_): StringTy()
  
  Feature("language"): StringTy()
  
  // Attribute(c, a): ?
  
  Eq(e1, e2) + Neq(e1, e2): BoolTy()
  where e1: ty1 and e2: ty2 and ty1 == ty2 else error $[incompatible type] on e2
  
  Lte(e1, e2) + Lt(e1, e2) + Gte(e1, e2) + Gt(e1, e2): BoolTy()
  where e1: IntTy() else error $[integer expression expected] on e1
    and e2: IntTy() else error $[integer expression expected] on e2
 
  And(e1, e2) + Or(e1, e2): BoolTy()
  where e1: BoolTy() else error $[boolean expression expected] on e1
    and e2: BoolTy() else error $[boolean expression expected] on e2

  Not(e): BoolTy()
  where e: BoolTy() else error $[boolean expression expected] on e
