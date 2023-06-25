import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import range from '../../utils/range';
import joinClasses from '../../utils/joinClasses';

interface IPaginationProps {
  currentPageNum?: number;
  limit: number;
  totalResults: number;
  onPageChange?: (pageNum: number) => void;
}

type PaginationRangeT = string | number;

function Pagination({ currentPageNum = 1, limit = 25, onPageChange, totalResults = 0 }: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState(currentPageNum);
  const totalPages = Math.ceil(totalResults / limit);
  const ETC = '...';
  const maxPageNums = 6;
  const startPage = currentPage - 1 === 0 ? 1 : currentPage - 1;
  const startPageGroup = currentPage === 1 ? range(startPage, currentPage + 2) : range(startPage, currentPage + 1);
  const endPageGroup = range(totalPages - maxPageNums, totalPages);
  const isEndGroup = endPageGroup.includes(currentPage);

  let paginationRange: PaginationRangeT[] = [];

  if (maxPageNums >= totalPages) {
    paginationRange = range(1, totalPages);
  } else if (isEndGroup) {
    paginationRange = [...endPageGroup];
  } else {
    paginationRange = [...startPageGroup, ETC, ...range(totalPages - 2, totalPages)];
  }

  const onNext = () => {
    setCurrentPage(currentPage + 1);
    if (onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrev = () => {
    setCurrentPage(currentPage - 1);
    if (onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const goToPage = (pageNum: number) => {
    setCurrentPage(pageNum);
    if (onPageChange) {
      onPageChange(pageNum);
    }
  };

  return (
    <div
      data-testid="pagination"
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      {totalPages > 1 ? (
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={onPrev}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-75 disabled:hover:bg-none disabled:cursor-not-allowed"
            type="button"
            disabled={currentPage <= 1}
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-75 disabled:hover:bg-none disabled:cursor-not-allowed"
            type="button"
            disabled={currentPage >= totalPages}
          >
            Next
          </button>
        </div>
      ) : null}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{limit}</span> of{' '}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        {totalPages > 1 ? (
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
              role="navigation"
            >
              <button
                onClick={onPrev}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-75 disabled:hover:bg-none disabled:cursor-not-allowed"
                type="button"
                disabled={currentPage <= 1}
                data-testid="prevBtn"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {paginationRange.map((pageNum) => {
                if (pageNum === ETC) {
                  return (
                    <span
                      key={pageNum}
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                      data-testid="etc"
                    >
                      {ETC}
                    </span>
                  );
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(Number(pageNum))}
                    aria-current="page"
                    className={joinClasses(
                      pageNum === currentPage
                        ? 'z-10 inline-flex bg-indigo-600 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        : '[&:nth-child(4)]:hidden [&:nth-child(6)]:hidden text-sm font-semibold focus:z-20 md:[&:nth-child(4)]:inline-flex md:[&:nth-child(6)]:inline-flex md:inline-flex hover:bg-gray-50',
                      'relative text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 items-center px-4 py-2'
                    )}
                    type="button"
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={onNext}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-75 disabled:hover:bg-none disabled:cursor-not-allowed"
                type="button"
                disabled={currentPage >= totalPages}
                data-testid="nextBtn"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Pagination;
