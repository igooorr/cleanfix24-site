import { useState } from "react";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { sendViaEmail, sendViaWhatsApp } from "@/lib/enquiry";
import { SITE, TEL_URL } from "@/lib/site";

interface Props {
  /** Pre-filled service name, sent with the enquiry. */
  service?: string;
  /** Subject line of the enquiry email. */
  title?: string;
  heading?: string;
  /** Unique prefix for input ids when the form appears more than once. */
  idPrefix?: string;
}

/** Short quote form (name, phone, town, details) used on the home and ad landing pages. */
const QuickQuoteForm = ({
  service = "",
  title = "Quote request",
  heading = "Get your free quote",
  idPrefix = "q",
}: Props) => {
  const empty = { name: "", phone: "", email: "", town: "", details: "" };
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const fields = () => ({
    Name: form.name,
    Phone: form.phone,
    Email: form.email,
    "Town / postcode": form.town,
    Service: service,
    Details: form.details,
  });

  const valid = () => {
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      toast.error("Please add your name and a phone number or email.");
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid()) return;
    setSending(true);
    try {
      const result = await sendViaEmail(title, fields(), form.email || undefined);
      if (result === "sent") {
        setSent(true);
        setForm(empty);
      } else {
        toast.success("Your email app is opening with the message ready — just press send.");
      }
    } catch {
      toast.error("Sorry, the message couldn't be sent. Please call or WhatsApp us.");
    } finally {
      setSending(false);
    }
  };

  const onWhatsApp = () => {
    if (!valid()) return;
    sendViaWhatsApp(title, fields());
  };

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const id = (name: string) => `${idPrefix}-${name}`;

  if (sent) {
    return (
      <div className="bg-card text-card-foreground rounded-2xl shadow-xl p-6 md:p-8 text-center" role="status">
        <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-2xl font-bold mb-2">Thank you — request received!</h2>
        <p className="text-muted-foreground mb-6">
          Ihor or Ruslana will get back to you as soon as possible with your quote. Need an answer
          sooner? Give us a call.
        </p>
        <Button asChild size="lg" variant="outline">
          <a href={TEL_URL}>
            <Phone size={18} /> {SITE.phoneDisplay}
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-card text-card-foreground rounded-2xl shadow-xl p-6 md:p-8 space-y-4"
    >
      <div>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-sm text-muted-foreground mt-1">Free and no obligation. Takes 30 seconds.</p>
      </div>
      <div>
        <Label htmlFor={id("name")}>Name *</Label>
        <Input id={id("name")} name="name" value={form.name} onChange={set} autoComplete="name" className="mt-1" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor={id("phone")}>Phone *</Label>
          <Input id={id("phone")} name="phone" type="tel" value={form.phone} onChange={set} autoComplete="tel" placeholder="07123 456789" className="mt-1" />
        </div>
        <div>
          <Label htmlFor={id("town")}>Town or postcode</Label>
          <Input id={id("town")} name="town" value={form.town} onChange={set} autoComplete="postal-code" placeholder="e.g. Wellington" className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor={id("email")}>Email (optional)</Label>
        <Input id={id("email")} name="email" type="email" value={form.email} onChange={set} autoComplete="email" className="mt-1" />
      </div>
      <div>
        <Label htmlFor={id("details")}>What needs cleaning?</Label>
        <Textarea
          id={id("details")}
          name="details"
          value={form.details}
          onChange={set}
          placeholder="e.g. 2-bed flat, moving out on the 28th"
          className="mt-1 min-h-[90px]"
        />
      </div>
      <Button type="submit" size="lg" disabled={sending} className="w-full text-lg">
        <Mail size={20} /> {sending ? "Sending…" : "Get My Free Quote"}
      </Button>
      <Button type="button" size="lg" onClick={onWhatsApp} className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
        <MessageCircle size={20} /> Send via WhatsApp instead
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We only use your details to reply to your enquiry.
      </p>
    </form>
  );
};

export default QuickQuoteForm;
