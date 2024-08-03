/* eslint-disable react/prop-types */
export default function DetailListBerry({
  name,
  growth_time,
  max_harvest,
  natural_gift_power,
  size,
  smoothness,
}) {
  return (
    <div className="flex flex-col gap-5">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Attribute
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-left">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
              Name
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {name}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
              Growth Time
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {growth_time}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
              Max Harvest
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {max_harvest}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
              Natural Gift Power
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {natural_gift_power}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
              Size
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {size}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
              Smoothness
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {smoothness}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
