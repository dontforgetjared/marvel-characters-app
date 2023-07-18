import { ReactNode, SyntheticEvent } from 'react';
import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import joinClasses from '../../utils/joinClasses';

type NavItemT = {
  href: string;
  name: string;
  current: boolean;
};

interface INavbarProps {
  includeSearch?: boolean;
  logoComponent?: ReactNode;
  navItems?: NavItemT[];
  onChangeHandler?: (e: SyntheticEvent) => void;
}

function Navbar({ logoComponent, navItems, onChangeHandler, includeSearch = false }: INavbarProps) {
  return (
    <Disclosure as="header" className="bg-white dark:bg-zinc-800 shadow">
      {({ open }) => (
        <>
          <div className="px-4 lg:px-10">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                {!!logoComponent && <div className="flex flex-shrink-0 items-center">{logoComponent}</div>}

                {!!navItems && (
                  <nav className="hidden lg:ml-6 lg:flex lg:space-x-8" aria-label="Main Navigation">
                    {navItems.map((navItem) => (
                      <a
                        href={navItem.href}
                        className={joinClasses(
                          navItem.current
                            ? 'border-rose-500'
                            : 'border-transparent hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300 active:ring-1 active:ring-gray-400',
                          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white'
                        )}
                        key={`navItem-${navItem.name}`}
                      >
                        {navItem.name}
                      </a>
                    ))}
                  </nav>
                )}
              </div>

              {includeSearch && (
                <div className="flex flex-1 items-center justify-center lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-sm">
                    <label htmlFor="search">
                      <span className="sr-only">Search</span>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border-0 bg-white dark:bg-zinc-700 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-inset focus:ring-rose-300 dark:focus:bg-white dark:focus:text-gray-900 sm:text-sm sm:leading-6 outline-none"
                          placeholder="Search"
                          type="search"
                          tabIndex={0}
                          onChange={(e) => onChangeHandler?.(e)}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              )}
              <div className="flex items-center lg:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 dark:text-gray-400 dark:hover:bg-zinc-700 dark:hover:text-white dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-inset dark:focus:ring-white"
                  role="button"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6"
                      aria-expanded="true"
                      aria-label="Mobile Navigation Close Button"
                      data-testid="closeicon"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-expanded="false"
                      aria-label="Mobile Navigation Open Button"
                      data-testid="openicon"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {navItems && (
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navItems.map((navItem) => (
                  <Disclosure.Button
                    as="a"
                    href={navItem.href}
                    className={joinClasses(
                      navItem.current
                        ? 'border-rose-500 bg-zinc-100 text-rose-700 dark:bg-zinc-900 dark:text-white'
                        : 'text-gray-600 border-transparent hover:border-gray-300 hover:bg-zinc-50 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white',
                      'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                    )}
                    key={`navItem_mobile-${navItem.name}`}
                  >
                    {navItem.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
