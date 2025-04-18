type Analysis = {
  id: string
  title: string
  price: number
  currency: string
}
  export const analyses: Analysis[] = [
    
    {
      id: "1",
      title: "СОЭ (скорость оседания эритроцитов) по Вестергрену",
      price: 27900,
      currency: "Сум",
    },
    {
      id: "2",
      title: "Общий анализ крови с лейкоформулой",
      price: 44900,
      currency: "Сум",
    },
    {
      id: "3",
      title: "Коагулограмма стандартная (АЧТВ, Протромбиновое время, МНО, ПТИ, Тромбиновое время, Фибриноген)",
      price: 199900,
      currency: "Сум",
    },
    {
      id: "4",
      title: 'Биохимический комплекс "оптимальный" (26 показателей)',
      price: 1349900,
      currency: "Сум",
    },
  ]