'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '@/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <>
      <Header  navItems={[]} />
      <main className="min-h-screen py-10">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Cart</h1>

            {items.length > 0 && (
              <Button variant="secondary" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </Button>
            )}
          </div>

          {items.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const price = Number(item.product.price);
                const itemTotal = price * item.quantity;

                return (
                  <div key={item.product.id} className="rounded-xl border p-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-lg font-semibold">
                          {item.product.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          ${price.toFixed(2)} each
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="secondary"
                          onClick={() =>
                            dispatch(decreaseQuantity(item.product.id))
                          }
                        >
                          -
                        </Button>

                        <span className="min-w-8 text-center">
                          {item.quantity}
                        </span>

                        <Button
                          variant="secondary"
                          onClick={() =>
                            dispatch(increaseQuantity(item.product.id))
                          }
                        >
                          +
                        </Button>
                      </div>

                      <div className="font-semibold">
                        ${itemTotal.toFixed(2)}
                      </div>

                      <Button
                        variant="secondary"
                        onClick={() =>
                          dispatch(removeFromCart(item.product.id))
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-xl border p-4">
                <h3 className="text-xl font-bold">
                  Total: ${total.toFixed(2)}
                </h3>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}