"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox, TextArea, TextField } from "@/components/ui/FormField";

/** Appointment request form. There is no backend yet, so submitting only confirms receipt locally. */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-describedby="enquiry-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="enquiry-first-name" name="firstName" label="Prénom" autoComplete="given-name" required />
        <TextField id="enquiry-last-name" name="lastName" label="Nom de famille" autoComplete="family-name" required />
      </div>
      <TextField id="enquiry-phone" name="phone" type="tel" label="Numéro de téléphone" autoComplete="tel" required />
      <TextField id="enquiry-email" name="email" type="email" label="Email" autoComplete="email" required />
      <TextField
        id="enquiry-postal-code"
        name="postalCode"
        label="Code postal"
        autoComplete="postal-code"
        inputMode="numeric"
        pattern="[0-9]{5}"
        title="Code postal à 5 chiffres"
        required
      />
      <TextArea id="enquiry-message" name="message" label="Dites-nous comment nous pouvons vous aider..." />
      <Checkbox id="enquiry-terms" name="terms" required>
        J’accepte les [Conditions Générales] fournies par l’entreprise. En fournissant mon numéro de téléphone,
        j’accepte de recevoir des messages SMS et des appels de l’entreprise.
      </Checkbox>
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-2">
        <p id="enquiry-status" role="status" className="text-xs font-medium text-paper">
          <AnimatePresence>
            {sent ? (
              <motion.span
                key="sent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="block"
              >
                Merci ! Votre demande a bien été envoyée. Un expert vous rappelle sous 24 heures.
              </motion.span>
            ) : null}
          </AnimatePresence>
        </p>
        <Button type="submit" variant="brand" size="sm" className="ml-auto">
          Send my request
        </Button>
      </div>
    </form>
  );
}
