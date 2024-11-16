import { Hotel } from '@/api/interfaces';

export default function searchHandle(
  searchQuery: string,
  allHotelList: Hotel[],
  setCurrentHotelList: (currentEntity: Hotel[]) => void,
) {
  const newCurrentHotelList: Hotel[] = [];
  for (let i = 0; i < allHotelList.length; i++) {
    const name = allHotelList[i].name.toLowerCase();
    const district = allHotelList[i].district.toLowerCase();
    const province = allHotelList[i].province.toLowerCase();
    const address = allHotelList[i].address.toLowerCase();
    if (
      name.includes(searchQuery.toLowerCase()) ||
      district.startsWith(searchQuery.toLowerCase()) ||
      province.startsWith(searchQuery.toLowerCase()) ||
      address.startsWith(searchQuery.toLowerCase())
    ) {
      newCurrentHotelList.push(allHotelList[i]);
    }
  }
  setCurrentHotelList(newCurrentHotelList);
}
