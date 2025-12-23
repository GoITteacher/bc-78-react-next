/**
 * 1. Стан для контрольованого елемента
 * type SortOrder = "asc" | "desc"
 * 2. Зробити SortFilter контрольованим value та onChange
 * 3. Додати до getTasks параметр та query-параметр order
 * 4. Додати значення сортування в queryKey
 */

import { useState } from "react";

type SortOrder = "asc" | "desc";

export default function SortFilter() {
  const [value, setValue] = useState<SortOrder>("asc");

  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value as SortOrder)}
    >
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
}
